import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { roomsData } from "../../constants/floorPlanData";
import Room from "../../models/Room";

export const fetchLightsData = createAsyncThunk("lights/fetchData", () => roomsData);

type LightsState = {
  rooms: Room[];
  isLoading: boolean;
};

const initialState: LightsState = {
  rooms: [],
  isLoading: false,
};

const lightsSlice = createSlice({
  name: "lights",
  initialState,
  reducers: {
    setLightsState(state, action: PayloadAction<Room[]>) {
      // for (const key in Object.keys(state)) {
      //   state[key] = action.payload[key]
      // }
      state.rooms = roomsData;
    },
    toggleLight(state, action: PayloadAction<{ roomId: string }>) {
      const index = state.rooms.findIndex(
        (room: Room) => room.properties.id === action.payload.roomId
      );

      state.rooms[index].properties.isLightOn =
        !state.rooms[index].properties.isLightOn;
    },
  },
  extraReducers: (builder) => {
    //FetchData
    builder.addCase(fetchLightsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLightsData.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
    builder.addCase(fetchLightsData.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
    });
  },
});

// Action creators are generated for each case reducer function
export const { setLightsState, toggleLight } = lightsSlice.actions;

export default lightsSlice.reducer;
