import React from "react";
import '../sass/main.scss';


const Footer = () => {


    return (
        <>
            <footer class="footer">
                <div class="row">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <a href="#" class="footer__link">Company</a>
                            </li>
                            <li class="footer__item">
                                <a href="#" class="footer__link">Contact us</a>
                            </li>
                            <li class="footer__item">
                                <a href="#" class="footer__link">Donations</a>
                            </li>
                            <li class="footer__item">
                                <a href="#" class="footer__link">Privacy Policy</a>
                            </li>
                            <li class="footer__item">
                                <a href="#" class="footer__link">Terms</a>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <p class="footer__copyright">
                            Design by <a href="#" class="footer__link">Spencer Huyck</a>. Built using a MERN stack. Copyright &copy; by
                            Spencer Huyck.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;