// src/features/insiderDataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInsiderData = createAsyncThunk(
	"insiderData/fetch",
	async () => {
		const response = await fetch(
			"https://api.iex.cloud/v1/data/CORE/INSIDERS?last=100&token=sk_c76810c6f45f467c85b45b846f92720f"
		);
		const data = await response.json();
		return data;
	}
);

const insiderDataSlice = createSlice({
	name: "insiderData",
	initialState: { data: [], status: "idle", error: null },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInsiderData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchInsiderData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchInsiderData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default insiderDataSlice.reducer;
