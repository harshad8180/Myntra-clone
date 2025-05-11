import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./fetchStatusSlice.js";
import itemsSlice from "./itemSlice";
import bagSlice from "./bagSlice.js";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
