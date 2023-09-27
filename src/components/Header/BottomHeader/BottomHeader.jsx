import React from "react";
import { BiLogoReact } from "react-icons/bi";
import styles from "./BottomHeader.module.css";
import CatalogButton from "./CatalogButton/CatalogButton";
import SearchField from "./SearchField/SearchField";

const BottomHeader = () => {
	return (
		<div className={styles.bottomHeader}>
			<BiLogoReact className={styles.logo} />
			<CatalogButton />
			<SearchField />
		</div>
	);
};

export default BottomHeader;
