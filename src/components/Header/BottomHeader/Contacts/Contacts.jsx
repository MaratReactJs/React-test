import React from "react";
import styles from "./Contacts.module.css";
import { BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<figure>
				<BsWhatsapp className={styles.icon} />
			</figure>

			<a className={styles.number} href="tel:+77079071777">
				+7 (707) 907-17-77
			</a>
		</div>
	);
};

export default Contacts;
