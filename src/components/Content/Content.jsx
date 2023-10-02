import React from "react";
import Slider from "./Slider/Slider";
import styles from "./Content.module.css";

import bork from "./../../images/bork.jpg";
import jura from "./../../images/jura.jpg";
import smartHome from "./../../images/smart-home.jpg";

const Content = () => {
	return (
		<div className={styles.content}>
			<div className={styles.sliderContainer}>
				<Slider />
				<div className={styles.banners}>
					<div className={styles.leftBanners}>
						<img src={bork} alt="" />
						<img src={jura} alt="" />
					</div>
					<div className={styles.rightBanners}>
						<img src={smartHome} height="100%" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
