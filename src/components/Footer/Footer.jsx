import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Copyright. @ 2023 Corp Name Все права защищены</p>
			<p>Пользовательское соглашение | Политика конфиденциальности</p>
		</footer>
	);
};

export default Footer;
