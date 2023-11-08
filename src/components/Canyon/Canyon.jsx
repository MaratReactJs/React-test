import React from "react";
import styles from "./Canyon.module.css";
import back from "./../Header/back.svg";

const Canyon = ({ operation, name, imgSrc, imgAlt, price, volatility }) => {
	return (
		<div
			className={`${styles.canyon} ${
				operation === "Вы продаете" ? styles.sell : styles.buy
			}`}>
			<h2 className={styles.operation}>{operation}</h2>
			<div className={styles.share}>
				<p className={styles.name}>
					<img width="25" src={imgSrc} alt={imgAlt} />
					{name}
					<img src={back} alt="back" />
				</p>
				<p className={styles.price}>{price}</p>
			</div>
			<div className={styles.volatility}>
				<p>{name}</p>
				<p>${volatility}</p>
			</div>
		</div>
	);
};

export default Canyon;
