import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./Slider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tv from "./../../../images/tv.jpg";
import fen from "./../../../images/fen.jpg";
import sok from "./../../../images/sok.jpg";

const Slider = () => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className={styles.swiper}
			style={{
				"--swiper-navigation-size": "24px",
			}}>
			<SwiperSlide>
				<img src={tv} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={fen} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={sok} alt="" />
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
