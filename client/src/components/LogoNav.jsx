import React from "react";
import '../sass/main.scss';

const LogoNav = () => {


    return (
        <>
            <div className="logo-nav">
                <div className="logo-nav__box">
                    <img src="../static/images/home_icon" alt="home" className="logo-nav__icon" />
                </div>
                <div className="logo-nav__box">
                    <img src="../static/images/bell_icon" alt="bell" className="logo-nav__icon" />
                </div>
                <div className="logo-nav__box">
                    <img src="../static/images/chat_icon" alt="chat bubble" className="logo-nav__icon" />
                </div>
                <div className="logo-nav__box">
                    <img src="../static/images/emergency_icon" alt="medical cross" className="logo-nav__icon" />
                </div>
                <div className="logo-nav__box">
                    <img src="../static/images/profile_icon" alt="profile" className="logo-nav__icon" />
                </div>
            </div>

        </>
    )
}

export default LogoNav;