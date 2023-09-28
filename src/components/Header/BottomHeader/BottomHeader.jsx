import React from "react";
import { BiLogoReact } from "react-icons/bi";
import styles from "./BottomHeader.module.css";
import CatalogButton from "./CatalogButton/CatalogButton";
import Contacts from "./Contacts/Contacts";
import SearchField from "./SearchField/SearchField";
import UserInterface from "./UserInterface/UserInterface";

const BottomHeader = () => {
	return (
		<div className={styles.bottomHeader}>
			<figure>
				<BiLogoReact className={styles.logo} />
			</figure>

			<CatalogButton />
			<SearchField />
			<UserInterface />
			<Contacts />
		</div>
	);
};

export default BottomHeader;
