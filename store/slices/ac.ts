import {
  acAvailableTemperature,
  acFanSpeeds,
  acModes,
  AcSettings,
} from "@constants/ac_settings";
import { BASE_URL } from "@constants/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAuthenticated } from "@services/auth/authApi";
import { camelCaseToSnakeCaseStr } from "@services/conversions";
import { Alert } from "react-native";
import { AppDispatch, RootState } from "..";
import { refreshToken } from "./auth";

const createAcAsyncThunk = (action: string) =>
  createAsyncThunk<
    boolean,
    boolean | undefined,
    { state: RootState; dispatch: AppDispatch }
  >(`ac/${action}`, async (correction: boolean | undefined, thunkApi) => {
    let AuthorizationStr = "";
    if (isAuthenticated(thunkApi.getState().auth)) {
      AuthorizationStr = "Bearer " + thunkApi.getState().auth.token;
    } else {
      await thunkApi.dispatch(refreshToken());
      AuthorizationStr = "Bearer " + thunkApi.getState().auth.token;
    }

    try {
      const response = await fetch(
        BASE_URL +
          "api/v1/" +
          camelCaseToSnakeCaseStr(action) +
          `?user=${thunkApi.getState().auth.username}`,
        {
          method: "POST",
          headers: {
            Authorization: AuthorizationStr,
          },
          body: JSON.stringify({
            user: thunkApi.getState().auth.username,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("fetch failed in createAcAsyncThunk");
        return false;
      }

      const data = await response.json();
      console.log(data);
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
    // TODO correction needs to be done on the server as well if you changed the AC's state from the original remote
    console.log(`${action} in the state`);
    return true;
  });

export const raiseTemperature = createAcAsyncThunk("raiseTemperature");
export const lowerTemperature = createAcAsyncThunk("lowerTemperature");
export const togglePower = createAcAsyncThunk("togglePower");
export const changeFanSpeed = createAcAsyncThunk("changeFanSpeed");
export const changeMode = createAcAsyncThunk("changeMode");

export const fetchAcState = createAsyncThunk<AcSettings, boolean | undefined>(
  `ac/fetchAcState`,
  async () => {
    try {
      const response = await fetch(BASE_URL + "api/v1/ac");

      if (!response.ok) {
        throw new Error("ERROR: Getting the ac state from server failed");
      }
      const data = await response.json();

      return data as AcSettings;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
);

type AcState = {
  isLoading: boolean;
  correctionMode: boolean;
  settings: AcSettings;
};

const initialState: AcState = {
  isLoading: true,
  correctionMode: false,
  settings: {
    power: false,
    mode: "cool",
    temperatures: {
      cool: 21,
      dry: 21,
      heat: 28,
      auto: 22,
      fan: 0,
    },
    fanSpeed: "low",
  },
};

const acSlice = createSlice({
  name: "ac",
  initialState,
  reducers: {
    toggleCorrectionMode(state: AcState) {
      state.correctionMode = !state.correctionMode;
    },
    setAcState(state: AcState, action: PayloadAction<AcSettings>) {
      const data = action.payload;

      state.settings.power = data.power;
      state.settings.mode = data.mode;
      state.settings.fanSpeed = data.fanSpeed;
      state.settings.temperatures = data.temperatures;
    },
  },
  extraReducers: (builder) => {
    // fetchAcState
    builder.addCase(fetchAcState.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAcState.fulfilled, (state, action) => {
      if (action.payload) {
        state.settings.mode = action.payload.mode;
        state.settings.fanSpeed = action.payload.fanSpeed;
        state.settings.power = action.payload.power;
        state.settings.temperatures = action.payload.temperatures;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchAcState.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // togglePower
    builder.addCase(togglePower.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(togglePower.fulfilled, (state, action) => {
      if (action.payload) {
        state.settings.power = !state.settings.power;
      }
      state.isLoading = false;
    });
    builder.addCase(togglePower.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // raiseTemperature
    builder.addCase(raiseTemperature.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(raiseTemperature.fulfilled, (state, action) => {
      const tempLimit = acAvailableTemperature(state.settings.mode)?.max;
      const temp = state.settings.temperatures[state.settings.mode];

      if (action.payload && tempLimit && temp && temp < tempLimit) {
        state.settings.temperatures[state.settings.mode] += 1;
      }
      state.isLoading = false;
    });
    builder.addCase(raiseTemperature.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // lowerTemperature
    builder.addCase(lowerTemperature.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(lowerTemperature.fulfilled, (state, action) => {
      const tempLimit = acAvailableTemperature(state.settings.mode)?.min;
      const temp = state.settings.temperatures[state.settings.mode];

      if (action.payload && tempLimit && temp && temp > tempLimit) {
        state.settings.temperatures[state.settings.mode] -= 1;
      }
      state.isLoading = false;
    });
    builder.addCase(lowerTemperature.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // changeFanSpeed
    builder.addCase(changeFanSpeed.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeFanSpeed.fulfilled, (state, action) => {
      const index = acFanSpeeds.findIndex(
        (value) => value === state.settings.fanSpeed
      );
      if (action.payload) {
        state.settings.fanSpeed = acFanSpeeds[(index + 1) % acFanSpeeds.length];
      }
      state.isLoading = false;
    });
    builder.addCase(changeFanSpeed.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // changeMode
    builder.addCase(changeMode.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeMode.fulfilled, (state, action) => {
      const index = acModes.findIndex((value) => value === state.settings.mode);
      if (action.payload) {
        state.settings.mode = acModes[(index + 1) % acModes.length];
      }
      state.isLoading = false;
    });
    builder.addCase(changeMode.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { toggleCorrectionMode, setAcState } = acSlice.actions;

export default acSlice.reducer;
