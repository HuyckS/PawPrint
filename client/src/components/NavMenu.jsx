import React from "react";
import '../sass/main.scss';

const NavMenu = () => {


    return (
        <>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&#128062;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                <span>&rarr;</span> About
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                <span>&rarr;</span> Login/Register
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                <span>&rarr;</span> News
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                <span>&rarr;</span> Reviews
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link"><span>&rarr;</span> Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default NavMenu;