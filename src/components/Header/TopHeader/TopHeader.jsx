import React from "react";
import styles from "./TopHeader.module.css";

const TopHeader = () => {
	return (
		<div className={styles.topHeader}>
			<ul>
				<li>Доставка</li>
				<li>Магазины</li>
				<li>Акции</li>
			</ul>

			<div className={styles.lang}>
				<div className={styles.selected}>Ru</div>
				<div>En</div>
			</div>
		</div>
	);
};

export default TopHeader;
