import Burger from "./Burger/Burger";
import styles from "./CatalogButton.module.css";
import React, { useState } from "react";

const CatalogButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={styles.catalogButton} onClick={toggleMenu}>
			<Burger isOpen={isOpen} />{" "}
			<span className={styles.text}>Каталог</span>
		</div>
	);
};

export default CatalogButton;
