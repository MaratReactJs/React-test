import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent}>
				<h2>Модалка</h2>

				<button onClick={onClose}>Закрыть</button>
			</div>
		</div>
	);
};

export default Modal;
