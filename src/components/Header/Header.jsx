import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import language from "./iconoir_language.svg";
import back from "./back.svg";

const Header = ({ openModal }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src={logo} alt="Logo" />
				</div>
				<div className={styles.navigation}>
					<ul>
						<li>Главная</li>
						<li>Лендинг</li>
						<li>FAQ</li>
						<li>Обратная связь</li>
					</ul>
				</div>
			</div>

			<div className={styles.icons}>
				<span className={styles.language}>
					<img src={language} alt="Language" />
					RU
					<img src={back} alt="back" />
				</span>
				<span>Decimal</span>
				<span onClick={openModal}>Connect wallet</span>
			</div>
		</header>
	);
};

export default Header;
