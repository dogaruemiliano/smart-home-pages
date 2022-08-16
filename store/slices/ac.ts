import {
  acAvailableTemperature,
  acFanSpeeds,
  acModes,
  AcSettings,
} from "@constants/ac_settings";
import { BASE_URL } from "@constants/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { camelCaseToSnakeCase } from "@services/conversions";
import { Alert } from "react-native";

const createAcAsyncThunk = (action: string) =>
  createAsyncThunk(`ac/${action}`, async (correction: boolean | undefined) => {
    if (!correction) {
      // try {
      //   const response = fetch(BASE_URL + camelCaseToSnakeCase(action), {method: "POST", headers: {
      //     Authorization: 
      //   }})
      // }
    }
    // TODO correction needs to be done on the server as well if you changed the AC's state from the original remote
    console.log(`${action} in the state`);
  });

export const raiseTemperature = createAcAsyncThunk("raiseTemperature");
export const lowerTemperature = createAcAsyncThunk("lowerTemperature");
export const togglePower = createAcAsyncThunk("togglePower");
export const changeFanSpeed = createAcAsyncThunk("changeFanSpeed");
export const changeMode = createAcAsyncThunk("changeMode");

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
    methodFromReducer(state: AcState, action: PayloadAction<AcSettings>) {
      console.log("payload", action.payload);
      const data = action.payload;

      state.settings.power = data.power;
      state.settings.mode = data.mode;
      state.settings.fanSpeed = data.fanSpeed;
      state.settings.temperatures = data.temperatures;
    },
  },
  extraReducers: (builder) => {
    // togglePower
    builder.addCase(togglePower.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(togglePower.fulfilled, (state, action) => {
      state.settings.power = !state.settings.power;
      state.isLoading = false;
    });
    builder.addCase(togglePower.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // raiseTemperature
    builder.addCase(raiseTemperature.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(raiseTemperature.fulfilled, (state) => {
      const tempLimit = acAvailableTemperature(state.settings.mode)?.max;
      const temp = state.settings.temperatures[state.settings.mode];

      if (tempLimit && temp && temp < tempLimit) {
        state.settings.temperatures[state.settings.mode] += 1;
      }
      state.isLoading = false;
    });
    builder.addCase(raiseTemperature.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // lowerTemperature
    builder.addCase(lowerTemperature.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(lowerTemperature.fulfilled, (state) => {
      const tempLimit = acAvailableTemperature(state.settings.mode)?.min;
      const temp = state.settings.temperatures[state.settings.mode];

      if (tempLimit && temp && temp > tempLimit) {
        state.settings.temperatures[state.settings.mode] -= 1;
      }
      state.isLoading = false;
    });
    builder.addCase(lowerTemperature.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // changeFanSpeed
    builder.addCase(changeFanSpeed.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeFanSpeed.fulfilled, (state) => {
      const index = acFanSpeeds.findIndex(
        (value) => value === state.settings.fanSpeed
      );
      state.settings.fanSpeed = acFanSpeeds[(index + 1) % acFanSpeeds.length];
      state.isLoading = false;
    });
    builder.addCase(changeFanSpeed.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // changeMode
    builder.addCase(changeMode.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeMode.fulfilled, (state) => {
      const index = acModes.findIndex((value) => value === state.settings.mode);
      state.settings.mode = acModes[(index + 1) % acModes.length];
      state.isLoading = false;
    });
    builder.addCase(changeMode.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { toggleCorrectionMode, methodFromReducer } = acSlice.actions;

export default acSlice.reducer;
