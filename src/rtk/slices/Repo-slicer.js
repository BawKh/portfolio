import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRepo = createAsyncThunk("RepoSlicer/fetchRepo", async () => {
  const res = await fetch("https://api.github.com/users/BawKh/repos");
  const data = res.json();
  return data;
});
export const RepoSlicer = createSlice({
  name: "RepoSlicer",
  initialState: [],
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchRepo.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default RepoSlicer.reducer;
