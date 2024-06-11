import React from "react";
import { data } from "./../../api";
import styles from "./Table.module.css";

const Table = () => {
	console.log(data, "data");

	const renderData = (data) => {
		return data.map((source) => (
			<tr key={source.id}>
				<td className={styles.td}>{source.name}</td>
			</tr>
		));
	};
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr>
					<th className={styles.th}>Источник</th>
					<th className={styles.th}>Подысточник</th>
					<th className={styles.th}>Подысточник-2 уровня</th>
					<th className={styles.th}>Подысточник-3 уровня</th>
					<th className={styles.th}>views</th>
					<th className={styles.th}>sells</th>
					<th className={styles.th}>secondary_orders</th>
					<th className={styles.th}>roi</th>
					<th className={styles.th}>revenue</th>
					<th className={styles.th}>profit</th>
					<th className={styles.th}>impressions</th>
					<th className={styles.th}>expenses</th>
					<th className={styles.th}>deals</th>
					<th className={styles.th}>cps</th>
					<th className={styles.th}>cpa</th>
					<th className={styles.th}>conversions</th>
				</tr>
			</thead>
			{data && <tbody className={styles.tbody}>{renderData(data)}</tbody>}
		</table>
	);
};

export default Table;
