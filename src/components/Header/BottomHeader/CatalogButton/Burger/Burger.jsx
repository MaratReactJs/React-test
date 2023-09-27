import styles from "./Burger.module.css";

const Burger = ({ isOpen }) => {
	return (
		<div className={`${styles.burger} ${isOpen ? `${styles.open}` : ""}`}>
			<div className={styles.bar}></div>
			<div className={styles.bar}></div>
			<div className={styles.bar}></div>
		</div>
	);
};

export default Burger;
