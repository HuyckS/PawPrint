import React from "react";
import '../sass/main.scss';


const Footer = () => {


    return (
        <>
            <footer className="footer">
                <div className="row">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Company</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Contact us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Donations</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Privacy Policy</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Terms</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <p className="footer__copyright">
                            Design by <a href="#" className="footer__link">Spencer Huyck</a>. Built using a MERN stack. Copyright &copy; by
                            Spencer Huyck.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;