import React from "react";
import styles from "./LanguagePopup.module.css";

const LanguagePopup = ({ onLanguageSelect, onMouseLeave }) => {
	return (
		<div className={styles.languagePopup} onMouseLeave={onMouseLeave}>
			<button onClick={() => onLanguageSelect("RU")}>RU</button>
			<button onClick={() => onLanguageSelect("ENG")}>ENG</button>
		</div>
	);
};

export default LanguagePopup;
