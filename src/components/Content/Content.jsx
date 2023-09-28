import React from "react";
import Slider from "./Slider/Slider";
import styles from "./Content.module.css";

const Content = () => {
	return (
		<div className={styles.content}>
			<Slider />
		</div>
	);
};

export default Content;
