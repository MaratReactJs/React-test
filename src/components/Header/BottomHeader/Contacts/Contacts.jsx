import React from "react";
import styles from "./Contacts.module.css";
import { BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<BsWhatsapp className={styles.icon} />
			<span className={styles.number}>8 (707) 907-17-77</span>
		</div>
	);
};

export default Contacts;
