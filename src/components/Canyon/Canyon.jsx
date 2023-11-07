import React from 'react';
import styles from './Canyon.module.css';

const Canyon = ({
	operation,
	name,
	imgSrc,
	imgAlt,
	price,
	volatility,
	imgBack,
}) => {
	return (
		<div
			className={`${styles.canyon} ${
				operation === 'Вы продаете' ? styles.sell : styles.buy
			}`}>
			<h2 className={styles.operation}>{operation}</h2>
			<div className={styles.share}>
				<p className={styles.name}>
					<img width="25" src={imgSrc} alt={imgAlt} />
					{name}
					<img src={imgBack} alt={imgBack} />
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
