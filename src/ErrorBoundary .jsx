import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		// Обрабатываем ошибку
		console.error("Ошибка в компоненте:", error, info);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			// Если произошла ошибка, отображаем сообщение об ошибке
			return (
				<div>
					Что-то пошло не так. Пожалуйста, перезагрузите страницу.
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
