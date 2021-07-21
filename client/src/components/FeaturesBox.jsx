import React from "react";
import '../sass/main.scss';
import video from "../static/videos/dogVideo.mp4";


const FeaturesBox = () => {


    return (
        <>
            <section className="section-features">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        Your browser is not supported.
                    </video>
                </div>
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            {/* <i className="feature-box__icon icon-basic-world"></i> */}
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Build a Pet Profile
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            {/* <i className="feature-box__icon icon-basic-compass"></i> */}
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Connect with Friends
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            {/* <i className="feature-box__icon icon-basic-map"></i> */}
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Set a schedule
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            {/* <i className="feature-box__icon icon-basic-heart"></i> */}
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Always reach Emergency Services
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturesBox;