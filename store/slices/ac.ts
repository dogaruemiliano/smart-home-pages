import {
  acAvailableTemperature,
  acFanSpeeds,
  acModes,
  AcSettings,
} from "@constants/ac_settings";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const raiseTemperature = createAsyncThunk("home/raiseTemperature", () =>
  console.log("raiseTemperature")
);
export const lowerTemperature = createAsyncThunk("home/lowerTemperature", () =>
  console.log("lowerTemperature")
);
export const turnOn = createAsyncThunk("home/turnOn", () =>
  console.log("turnOn")
);
export const turnOff = createAsyncThunk("home/turnOff", () =>
  console.log("turnOff")
);
export const changeFanSpeed = createAsyncThunk("home/changeFanSpeed", () =>
  console.log("changeFanSpeed")
);
export const changeMode = createAsyncThunk("home/changeMode", () =>
  console.log("changeMode")
);

type AcState = {
  isLoading: boolean;
  settings: AcSettings;
};

const initialState: AcState = {
  isLoading: true,
  settings: {
    power: false,
    mode: "cool",
    temperature: {
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
    setState(state, action: PayloadAction<AcState>) {
      // for (const key in Object.keys(state)) {
      //   state[key] = action.payload[key]
      // }
      // state.ac.power = { power: false };
      // TODO maybe set from server
    },
  },
  extraReducers: (builder) => {
    // turnOn
    builder.addCase(turnOn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(turnOn.fulfilled, (state, action) => {
      state.settings.power = true;
      state.isLoading = false;
    });
    builder.addCase(turnOn.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    // turnOff
    builder.addCase(turnOff.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(turnOff.fulfilled, (state, action) => {
      state.settings.power = false;
      state.isLoading = false;
    });
    builder.addCase(turnOff.rejected, (state, action) => {
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
      const temp = state.settings.temperature[state.settings.mode];

      if (tempLimit && temp && temp < tempLimit) {
        state.settings.temperature[state.settings.mode] += 1;
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
      const temp = state.settings.temperature[state.settings.mode];

      if (tempLimit && temp && temp > tempLimit) {
        state.settings.temperature[state.settings.mode] -= 1;
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
export const { setState } = acSlice.actions;

export default acSlice.reducer;
