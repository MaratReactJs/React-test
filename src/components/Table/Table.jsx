import React from "react";
import { data } from "./../../api";

const renderTable = (data) => {
	return data.map(({ id, name, isNextSourceNameEmpty, subSource }) => {
		return (
			<tr key={id}>
				<td>{name}</td>
			</tr>
		);
	});
};
console.log(data);

const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Source</th>
					<th>SubSource-1</th>
					<th>SubSource-2</th>
					<th>SubSource-3</th>
					<th>Views</th>
					<th>Deals</th>
					<th>Sells</th>
					<th>Impressions</th>
					<th>Expenses</th>
					<th>Secondary Orders</th>
					<th>Conversions</th>
					<th>Profit</th>
					<th>Revenue</th>
					<th>ROI</th>
					<th>CPA</th>
					<th>CPS</th>
				</tr>
			</thead>
			<tbody>{renderTable(data)}</tbody>
		</table>
	);
};

export default Table;
