import React from "react";
import { data } from "./../../api";

const renderSubSources = (subSource, level = 1) => {
	if (!subSource || subSource.length === 0) return null;

	return subSource.map(
		({ id, name, isNextSourceNameEmpty, subSource, data }) => (
			<React.Fragment key={id}>
				<tr>
					{Array(level)
						.fill(null)
						.map((_, index) => (
							<td key={index}></td>
						))}
					<td>{name}</td>
					{Array(3 - level)
						.fill(null)
						.map((_, index) => (
							<td key={index}></td>
						))}
					{data &&
						data.length > 0 &&
						data.map((entry, index) => (
							<React.Fragment key={index}>
								<td>{entry.views}</td>
								<td>{entry.deals}</td>
								<td>{entry.sells}</td>
								<td>{entry.impressions}</td>
								<td>{entry.expenses}</td>
								<td>{entry.secondary_orders}</td>
								<td>{entry.conversions}</td>
								<td>{entry.profit}</td>
								<td>{entry.revenue}</td>
								<td>{entry.roi}</td>
								<td>{entry.cpa}</td>
								<td>{entry.cps}</td>
							</React.Fragment>
						))}
					{!data &&
						Array(12)
							.fill(null)
							.map((_, index) => <td key={index}></td>)}
				</tr>
				{!isNextSourceNameEmpty &&
					renderSubSources(subSource, level + 1)}
			</React.Fragment>
		)
	);
};

const renderTable = (data) => {
	if (!data || data.length === 0) return null;

	return data.map(({ id, name, isNextSourceNameEmpty, subSource }) => (
		<React.Fragment key={id}>
			<tr>
				<td>{name}</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			{!isNextSourceNameEmpty && renderSubSources(subSource, 1)}
		</React.Fragment>
	));
};

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
