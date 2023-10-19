import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNumber: 1,
			pageSize: 10,
			data: [],
			currentPage: 1,
			searchTerm: "",
			searchResults: [],
		};
	}

	componentDidMount() {
		this.fetchData(1);
		const savedSearchTerm = localStorage.getItem("searchTerm");
		if (savedSearchTerm) {
			this.setState({ searchTerm: savedSearchTerm }, () => {
				this.handleSearch();
			});
		}
	}

	fetchData = (page) => {
		const { pageSize, searchTerm } = this.state;
		let apiUrl = `https://stapi.co/api/v2/rest/element/search?pageNumber=${page}&pageSize=${pageSize}`;
		if (searchTerm) {
			apiUrl += `&search=${searchTerm.trim()}`;
		}

		axios
			.get(apiUrl)
			.then((response) => {
				const newData = response.data;
				this.setState({
					data: newData.elements,
					currentPage: page,
				});
				this.updateSearchResults();
			})
			.catch((error) => {
				console.error("Ошибка при запросе данных:", error);
			});
	};

	handleSearchChange = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	};

	handleSearch = () => {
		const { searchTerm } = this.state;
		localStorage.setItem("searchTerm", searchTerm);
		this.fetchData(1);
	};

	updateSearchResults = () => {
		const { data, searchTerm } = this.state;
		const searchResults = data.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		this.setState({
			searchResults,
		});
	};

	handleReset = () => {
		this.setState({
			searchTerm: "", // Сброс поискового запроса
		});
		localStorage.removeItem("searchTerm"); // Удаление сохраненного поискового запроса
		this.fetchData(1); // Выполнение запроса с пустым запросом
	};

	render() {
		const { searchResults, currentPage, searchTerm } = this.state;

		return (
			<div>
				<div>
					<h1>Data from API:</h1>
					<input
						type="text"
						placeholder="Поиск"
						value={searchTerm}
						onChange={this.handleSearchChange}
					/>
					<button onClick={this.handleSearch}>Поиск</button>
					<button onClick={this.handleReset}>Сброс</button>{" "}
					{/* Добавлена кнопка сброса */}
				</div>
				<div>
					<ul>
						{searchResults.map((item) => (
							<li key={item.id}>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
							</li>
						))}
					</ul>
				</div>
				<div>
					<button
						onClick={() => this.fetchData(currentPage - 1)}
						disabled={currentPage === 1}>
						Предыдущая страница
					</button>
					<button
						onClick={() => this.fetchData(currentPage + 1)}
						disabled={searchResults.length === 0}>
						Следующая страница
					</button>
				</div>
			</div>
		);
	}
}

export default App;
