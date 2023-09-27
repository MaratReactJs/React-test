import React from "react";
import styles from "./Header.module.css";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
	return (
		<header className={styles.header}>
			<TopHeader />
			<div className={styles.line}></div>
		</header>
	);
};

export default Header;
