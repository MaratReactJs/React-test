import React from "react";
import styles from "./SearchField.module.css";

const SearchField = () => {
	return (
		<input
			type="search"
			className={styles.searchField}
			placeholder="Искать товары"
		/>
	);
};

export default SearchField;
