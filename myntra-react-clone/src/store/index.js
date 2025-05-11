import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./fetchStatusSlice.js";
import itemsSlice from "./itemSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
