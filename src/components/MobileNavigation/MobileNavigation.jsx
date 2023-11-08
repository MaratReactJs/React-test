import React from "react";
import styles from "./MobileNavigation.module.css";
import update from "./update.svg";
import question from "./question.svg";
import list from "./list.svg";
import message from "./message.svg";
import internet from "./internet.svg";

const MobileNavigation = () => {
	return (
		<nav className={styles.mobileNavigation}>
			<ul>
				<li>
					<img width="80" src={update} alt="update" />
				</li>
				<li>
					<img width="80" src={question} alt="question" />
				</li>
				<li>
					<img width="80" src={list} alt="list" />
				</li>
				<li>
					<img width="80" src={message} alt="message" />
				</li>
				<li>
					<img width="80" src={internet} alt="internet" />
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavigation;
