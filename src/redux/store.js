// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import insiderDataSlice from "./slices/insiderDataSlice";

export default configureStore({
	reducer: {
		insiderData: insiderDataSlice,
	},
});
