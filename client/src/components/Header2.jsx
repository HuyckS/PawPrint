import React from "react";
import '../sass/main.scss';
import { Link } from '@reach/router';
import logo2 from "../static/images/PawPrintLogo2.png";


const Header2 = () => {


    return (
        <>
            <header className="header2">
                <Link to="/" className="header2__home-link">
                    <div className="header2__logo-box">
                        <div className="header2__icon-box">
                            <img src={logo2} alt="logo" className="header2__icon" />
                        </div>
                        <p className="header2__company">PAW PRINT</p>
                    </div>
                </Link>
                <div className="header2__nav">
                    <div className="header2__nav--box">
                        <Link to="#" className="header2__nav--link"><p className="header2__nav--text">+ Add Pet</p></Link>
                    </div>
                    <div className="header2__nav--box">
                        <Link to="#" className="header2__nav--link"><p className="header2__nav--text">+ Add Friend</p></Link>
                    </div>
                    <div className="header2__nav--box">
                        <Link to="#" className="header2__nav--link"><p className="header2__nav--text">+ Add Pet Friend</p></Link>
                    </div>
                    <div className="header2__nav--box">
                        <Link to="/profile" className="header2__nav--link"><p className="header2__nav--text">Settings</p></Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header2;