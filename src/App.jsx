import React, { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<body>
			<Header openModal={openModal} />
			<Modal isOpen={isModalOpen} onClose={closeModal} />
			<Main />
			<Footer />
		</body>
	);
}

export default App;
