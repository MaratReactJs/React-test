import React, { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal";

function App() {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className="App">
			<Header openModal={openModal} />
			<Modal isOpen={isModalOpen} onClose={closeModal} />
			{/* Ваш контент */}
		</div>
	);
}

export default App;
