import React from "react";
import '../sass/main.scss';
import video from "../static/videos/dogVideo2.mp4";


const Header = () => {


    return (
        <>
            <section className="header">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        Your browser is not supported.
                    </video>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Paw Print</span>
                        <span className="heading-primary--sub">Care for your pet</span>
                    </h1>
                    <a href="#" className="btn btn--white btn--animated">Join now!</a>
                </div>
            </section>
        </>
    )
}

export default Header;