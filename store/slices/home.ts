import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { roomsData } from "../../constants/floorPlanData";
import Room from "../../models/Room";

export const fetchData = createAsyncThunk("home/fetchData", () => roomsData);

type HomeState = {
  rooms: Room[];
};

const initialState: HomeState = {
  rooms: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setState(state, action: PayloadAction<HomeState>) {
      // for (const key in Object.keys(state)) {
      //   state[key] = action.payload[key]
      // }
      state.rooms = roomsData;
    },
    toggleLight(state, action: PayloadAction<{ roomId: string }>) {
      const index = state.rooms.findIndex(
        (room: Room) => room.properties.id === action.payload.roomId
      );
      debugger;
      state.rooms[index].properties.isLightOn =
        !state.rooms[index].properties.isLightOn;
    },
  },
  extraReducers: (builder) => {
    // FetchData
    // builder.addCase(fetchData.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(fetchData.fulfilled, (state, action) => {
    //   state.rooms = action.payload
    // });
    // builder.addCase(fetchData.rejected, (state, action) => {
    //   console.log(action);
    //   Alert.alert("There was an error", action.error.message, [
    //     { text: "Close", style: "cancel" },
    //   ]);
    // });
  },
});

// Action creators are generated for each case reducer function
export const { setState, toggleLight } = homeSlice.actions;

export default homeSlice.reducer;
