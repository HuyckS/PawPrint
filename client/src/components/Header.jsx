import React from "react";
import '../sass/main.scss';


const NavMenu = () => {


    return (
        <>
            <header className="header">
                <div className="header__logo-box">
                    <img src="#" alt="logo" className="header__logo" />
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Paw Print</span>
                        <span className="heading-primary--sub">Care for your pet</span>
                    </h1>
                    <a href="#" className="btn btn--white btn--animated">Join now!</a>
                </div>
            </header>
        </>
    )
}

export default NavMenu;