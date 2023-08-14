import React, { useState } from "react";

const Table = ({ insiderData }) => {
	const itemsPerPage = 10;
	const [currentPage, setCurrentPage] = useState(1);

	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;
	const currentItems = insiderData.data.slice(firstIndex, lastIndex);

	const totalPages = Math.ceil(insiderData.data.length / itemsPerPage);

	const handlePrevClick = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const formatMillisecondsToDateString = (milliseconds) => {
		const date = new Date(milliseconds);
		return date.toLocaleString().slice(0, 10);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2 className="my-4">Table</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Report Date</th>
								<th>Position</th>
							</tr>
						</thead>
						<tbody>
							{currentItems.map((item, idx) => (
								<tr key={item.subkey}>
									<td>{firstIndex + idx + 1}</td>
									<td>{item.entityName}</td>
									<td>
										{formatMillisecondsToDateString(
											item.reportDate
										)}
									</td>
									<td>{item.position}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="d-flex justify-content-between w-25 mx-auto">
						<button
							className="btn btn-primary mr-2"
							onClick={handlePrevClick}
							disabled={currentPage === 1}>
							Prev
						</button>
						<button
							className="btn btn-primary"
							onClick={handleNextClick}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
