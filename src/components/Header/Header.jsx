import React from "react";
import github from "../../assets/github1.png";
import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__headerContainer}>
				<div className={s.header__title}>Hello, IT-Special</div>
				<div className={s.header__link}>
					<a href="https://github.com/mikhailVershkov91">
						<img src={github} alt="github" width="30" height="30" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
