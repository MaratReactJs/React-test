import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInsiderData } from "./redux/slices/insiderDataSlice";
import Table from "./components/Table";

const App = () => {
	const dispatch = useDispatch();
	const insiderData = useSelector((state) => state.insiderData);

	useEffect(() => {
		dispatch(fetchInsiderData());
	}, [dispatch]);

	if (insiderData.status === "loading") {
		return <div>Loading...</div>;
	}

	if (insiderData.status === "failed") {
		return <div>Error: {insiderData.error}</div>;
	}

	return (
		<div>
			<h2>Insider Data</h2>
			<Table insiderData={insiderData} />
		</div>
	);
};

export default App;
