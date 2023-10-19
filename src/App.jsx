import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	// Объявление класса компонента "App" наследующего функциональность React.Component
	constructor(props) {
		super(props);
		// Вызов конструктора базового класса и инициализация состояния компонента
		this.state = {
			pageNumber: 1, // Номер текущей страницы
			pageSize: 10, // Размер страницы
			data: [], // Данные с сервера
			currentPage: 1, // Текущая страница
			searchTerm: "", // Поисковый запрос
			searchResults: [], // Результаты поиска
		};
	}

	componentDidMount() {
		// Метод жизненного цикла: вызывается после монтирования компонента
		this.fetchData(1); // Вызываем функцию fetchData с номером страницы 1
		const savedSearchTerm = localStorage.getItem("searchTerm");
		// Получаем сохраненный поисковый запрос из локального хранилища
		if (savedSearchTerm) {
			// Если сохраненный поисковый запрос существует
			this.setState({ searchTerm: savedSearchTerm }, () => {
				// Устанавливаем его как текущий поисковый запрос и выполняем поиск
				this.handleSearch();
			});
		}
	}

	fetchData = (page) => {
		// Функция для получения данных с сервера
		const { pageSize, searchTerm } = this.state;
		let apiUrl = `https://stapi.co/api/v2/rest/element/search?pageNumber=${page}&pageSize=${pageSize}`;
		// Создаем URL API с учетом номера страницы и размера страницы
		if (searchTerm) {
			apiUrl += `&search=${searchTerm.trim()}`;
		}
		// Если есть поисковый запрос, добавляем его к URL

		axios
			.get(apiUrl)
			.then((response) => {
				// Выполняем GET-запрос к API
				const newData = response.data;
				this.setState({
					data: newData.elements, // Обновляем данные с сервера
					currentPage: page, // Обновляем текущую страницу
				});
				this.updateSearchResults(); // Обновляем результаты поиска
			})
			.catch((error) => {
				console.error("Ошибка при запросе данных:", error);
				// Обработка ошибки запроса и вывод сообщения в консоль
			});
	};

	handleSearchChange = (event) => {
		// Обработчик изменений в поле ввода поиска
		this.setState({
			searchTerm: event.target.value, // Обновляем поисковый запрос при изменении ввода
		});
	};

	handleSearch = () => {
		// Функция для выполнения поиска
		const { searchTerm } = this.state;
		localStorage.setItem("searchTerm", searchTerm);
		// Сохраняем поисковый запрос в локальном хранилище
		this.fetchData(1); // Выполняем поиск для первой страницы
	};

	updateSearchResults = () => {
		// Обновление результатов поиска
		const { data, searchTerm } = this.state;
		// Фильтруем данные для результатов поиска на основе поискового запроса
		const searchResults = data.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		this.setState({
			searchResults, // Обновляем результаты поиска
		});
	};

	handleReset = () => {
		// Функция для сброса поискового запроса
		this.setState({
			searchTerm: "", // Сброс поискового запроса
		});
		localStorage.removeItem("searchTerm"); // Удаление сохраненного поискового запроса
		this.fetchData(1); // Выполнение запроса с пустым запросом
	};

	render() {
		const { searchResults, currentPage, searchTerm } = this.state;
		// Извлекаем данные из состояния компонента

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
