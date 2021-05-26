import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk(
  "renderData/getAllData",
  async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    return data;
  }
);

export const getFilterData = createAsyncThunk(
  "renderData/getFilterData",
  async (arg) => {
    const response = await fetch("data.json");
    const data = await response.json();

    const filteredData = data
      .filter((data) => {
        if (arg.city === "") return data;
        return data.city.toLowerCase().includes(arg.city);
      })
      .filter((data) => data.maxGuests >= arg.guests);

    return filteredData;
  }
);

const initialState = {
  renderData: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllData.fulfilled]: (state, action) => {
      state.renderData = action.payload;
    },
    [getFilterData.fulfilled]: (state, action) => {
      state.renderData = action.payload;
    },
  },
});

// export const {} = dataSlice.actions;
export default dataSlice.reducer;
