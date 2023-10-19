import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Обновить состояние, чтобы следующий рендер отображал запасной интерфейс.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Здесь вы можете отправить ошибку на сервер или выполнить другие действия при обработке ошибки.
		console.error("Произошла ошибка:", error);
	}

	render() {
		console.log(this.state.hasError, "nen ye;yf jifdf");
		if (this.state.hasError) {
			// Выводите резервный интерфейс
			return <div>Что-то пошло не так. Мы извиняемся за неудобства.</div>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
