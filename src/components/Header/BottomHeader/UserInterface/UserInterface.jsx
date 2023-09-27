import React from "react";
import styles from "./UserInterface.module.css";
import { GoGitCompare } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiUser } from "react-icons/bi";

const UserInterface = () => {
	return (
		<div className={styles.userInterface}>
			<div className={styles.compare}>
				<figure className={styles.figureCompare}>
					<GoGitCompare className={styles.icon} />
					<figcaption>Сравнение</figcaption>
				</figure>
			</div>

			<div className={styles.favorite}>
				<figure className={styles.figureFavorite}>
					<MdFavoriteBorder className={styles.icon} />
					<figcaption>Избранное</figcaption>
				</figure>
			</div>

			<div className={styles.cart}>
				<figure className={styles.figureCart}>
					<HiOutlineShoppingCart className={styles.icon} />
					<figcaption>Корзина</figcaption>
				</figure>
			</div>

			<div className={styles.user}>
				<figure className={styles.figureUser}>
					<BiUser className={styles.icon} />
					<figcaption>Войти</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default UserInterface;
