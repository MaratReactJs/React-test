import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import language from "./iconoir_language.svg";
import back from "./back.svg";
import decimal from "./decimal.svg";
import wallet from "./solar_wallet-money-linear.svg";
import LanguagePopup from "./../LanguagePopup/LanguagePopup";

const Header = ({ openModal }) => {
	const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false);
	const [lang, setLang] = useState("RU");

	const openLanguagePopup = () => {
		setLanguagePopupOpen(true);
	};

	const closeLanguagePopup = () => {
		setLanguagePopupOpen(false);
	};

	const handleLanguageSelect = (language) => {
		setLang(language);
		closeLanguagePopup();
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src={logo} alt="Logo" />
				</div>
				<div className={styles.navigation}>
					<ul>
						<li className={styles.active}>Главная</li>
						<li>Лендинг</li>
						<li>FAQ</li>
						<li>Обратная связь</li>
					</ul>
				</div>
			</div>

			<div className={styles.icons}>
				<div
					className={styles.languageContainer}
					onMouseEnter={openLanguagePopup}
					onMouseLeave={closeLanguagePopup}>
					<span className={styles.language}>
						<img src={language} alt="Language" />
						{lang}
						<img src={back} alt="back" />
					</span>
					{isLanguagePopupOpen && (
						<LanguagePopup
							onMouseLeave={closeLanguagePopup}
							onLanguageSelect={handleLanguageSelect}
						/>
					)}
				</div>

				<span className={styles.decimal}>
					<img src={decimal} alt="Decimal" />
					Decimal
				</span>
				<span className={styles.wallet} onClick={openModal}>
					<img src={wallet} alt="Wallet" />
					Connect wallet
				</span>
			</div>
		</header>
	);
};

export default Header;
