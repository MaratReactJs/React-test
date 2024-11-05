import React from "react";
import { data } from "./../../api";

// Функция для рендеринга вложенных источников (subSource) на заданном уровне
const renderNestedSources = (subSource, level = 1) => {
	// Если нет вложенных источников, возвращаем null
	if (!subSource || subSource.length === 0) return null;

	// Обрабатываем каждый элемент в subSource
	return subSource.map(({ id, name, isNextSourceNameEmpty, subSource, data }) => (
		<React.Fragment key={id}>
			<tr>
				{/* Вставляем пустые ячейки для выравнивания уровня */}
				{[...Array(level)].map((_, index) => (
					<td key={index}></td>
				))}

				{/* Отображаем название текущего источника */}
				<td>{name}</td>

				{/* Заполняем оставшиеся ячейки для выравнивания столбцов */}
				{[...Array(3 - level)].map((_, index) => (
					<td key={index}></td>
				))}

				{/* Отображаем данные, если они есть */}
				{data
					? data.map((entry, index) => (
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
					  ))
					: // Если данных нет, добавляем пустые ячейки
					  [...Array(12)].map((_, index) => <td key={index}></td>)}
			</tr>

			{/* Рекурсивно рендерим вложенные источники, увеличивая уровень */}
			{!isNextSourceNameEmpty && renderNestedSources(subSource, level + 1)}
		</React.Fragment>
	));
};

// Основная функция для рендеринга таблицы данных верхнего уровня
const renderMainTable = (data) => {
	if (!data || data.length === 0) return null; // Проверка на наличие данных

	return data.map(({ id, name, isNextSourceNameEmpty, subSource }) => (
		<React.Fragment key={id}>
			<tr>
				{/* Отображаем имя основного источника */}
				<td>{name}</td>

				{/* Добавляем пустые ячейки для выравнивания с подуровнями */}
				{[...Array(15)].map((_, index) => (
					<td key={index}></td>
				))}
			</tr>

			{/* Рекурсивно рендерим вложенные подуровни источников */}
			{!isNextSourceNameEmpty && renderNestedSources(subSource, 1)}
		</React.Fragment>
	));
};

// Компонент таблицы
const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Источник</th>
					<th>Подысточник-1</th>
					<th>Подысточник-2</th>
					<th>Подысточник-3</th>
					<th>Показы</th>
					<th>Сделки</th>
					<th>Покупки</th>
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
			<tbody>{renderMainTable(data)}</tbody>
		</table>
	);
};

export default Table;
