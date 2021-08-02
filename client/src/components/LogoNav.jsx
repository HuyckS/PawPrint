import React from "react";
import '../sass/main.scss';
import { Link } from "@reach/router";
import home from "../static/images/home_icon.jpg";
import bell from "../static/images/bell_icon.png";
import chat from "../static/images/chat_icon.png";
import emergency from "../static/images/emergency_icon.png";
import profile from "../static/images/profile_icon.png";


const LogoNav = () => {


    return (
        <>
            <div className="logo-nav u-margin-bottom-small">
                <div className="logo-nav__box">
                    <Link to="/dashboard"><img src={home} alt="home" className="logo-nav__icon" /></Link>
                </div>
                <div className="logo-nav__box">
                    <Link to="/notifications"><img src={bell} alt="bell" className="logo-nav__icon" /></Link>
                </div>
                <div className="logo-nav__box">
                    <Link to="/chat"><img src={chat} alt="bubble" className="logo-nav__icon" /></Link>
                </div>
                <div className="logo-nav__box">
                    <Link to="/emergency"><img src={emergency} alt="cross" className="logo-nav__icon" /></Link>
                </div>
                <div className="logo-nav__box">
                    <Link to="/profile"><img src={profile} alt="profile" className="logo-nav__icon" /></Link>
                </div>
            </div>

        </>
    )
}

export default LogoNav;