import React from "react";
import '../sass/main.scss';


const FeaturesBox = () => {


    return (
        <>
            <section class="section-features">
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            {/* <i class="feature-box__icon icon-basic-world"></i> */}
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Build a Pet Profile
                            </h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            {/* <i class="feature-box__icon icon-basic-compass"></i> */}
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Connect with Friends
                            </h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            {/* <i class="feature-box__icon icon-basic-map"></i> */}
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Set a schedule
                            </h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                                eum veritatis nemo explicabo adipisci esse officia eaque vitae
                                ratione alias!
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            {/* <i class="feature-box__icon icon-basic-heart"></i> */}
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Always reach Emergency Services
                            </h3>
                            <p class="feature-box__text">
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