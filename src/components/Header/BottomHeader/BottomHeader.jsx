import React from "react";
import { BiLogoReact } from "react-icons/bi";
import styles from "./BottomHeader.module.css";
import CatalogButton from "./CatalogButton/CatalogButton";

const BottomHeader = () => {
	return (
		<div className={styles.bottomHeader}>
			<BiLogoReact className={styles.logo} />
			<CatalogButton />
		</div>
	);
};

export default BottomHeader;
