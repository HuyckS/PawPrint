import React from "react";
import '../sass/main.scss';
import { Link } from '@reach/router';


const Header2 = () => {


    return (
        <>
            <header className="header2">
                <div className="header2__logo-box">
                    <img src="#" alt="logo" className="header__logo" />
                </div>
                <div className="header2-nav">
                    <div className="header2-nav__box">
                        <Link to="/home"><p className="header2__text">About</p></Link>
                    </div>
                    <div className="header2-nav__box">
                        <Link to="#"><p className="header2__text">+ Add Pet</p></Link>
                    </div>
                    <div className="header2-nav__box">
                        <Link to="#"><p className="header2__text">+ Add Friend</p></Link>
                    </div>
                    <div className="header2-nav__box">
                        <Link to="#"><p className="header2__text">+ Add Pet Friend</p></Link>
                    </div>
                    <div className="header2-nav__box">
                        <Link to="/profile"><p className="header2__text">Settings</p></Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header2;