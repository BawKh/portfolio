import { configureStore } from "@reduxjs/toolkit";
import RepoSlicer from "./slices/Repo-slicer";
const store = configureStore({
  reducer: {
    repo: RepoSlicer,
  },
});

export default store;
