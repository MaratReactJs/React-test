import React from "react";
import styles from "./Modal.module.css";
import Canyon from "../Canyon/Canyon";
import cryg from "./CRYG.svg";
import del from "./del 1.svg";
import back from "./../Header/back.svg";
import znak from "./znak.svg";
import wallet from "./wallet.svg";

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}>
				<div className={styles.heading}>
					<p className={styles.active}>Swap</p>
					<p>Pools</p>
				</div>
				<Canyon
					operation="Вы продаете"
					name="CRYG"
					imgSrc={cryg}
					imgBack={back}
					imgAlt={cryg}
					price={1}
					volatility={333.73}
				/>

				<Canyon
					operation="Вы покупаете"
					name="DEL"
					imgSrc={del}
					imgBack={back}
					imgAlt={del}
					price={714.543016}
					volatility="331.62(-0.63%)"
				/>

				<div className={styles.rate}>
					<img src={znak} alt="znak" /> 1 CRYG = 714.543 DEL{" "}
					<span className={styles.assignment}>($331.42)</span>
				</div>

				<button className={styles.button} onClick={onClose}>
					<img src={wallet} alt="wallet" />
					Сonnect wallet
				</button>
			</div>
		</div>
	);
};

export default Modal;
