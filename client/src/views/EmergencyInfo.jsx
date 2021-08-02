import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import logo from '../static/images/PawPrintLogo.jpg';
import NavMenu from "../components/NavMenu";
import LogoNav from "../components/LogoNav";

const EmergencyInfo = () => {



    return (
        <div>
            <LogoNav />
            <section className="section-emergency">
                <div className="emergency-contact">
                    <h2 className="emergency-contact__heading">River Road Veterinarian</h2>
                    <div className="emergency-contact__content">
                        <div className="emergency-contact__content--block">
                            <h4>Address: </h4>
                            <p>123 Pet Way, Seattle, WA 11111</p>
                        </div>
                        <div className="emergency-contact__content--block">
                            <h4>Phone: </h4>
                            <p>XXX-XXX-XXXX</p>
                        </div>
                        <div className="emergency-contact__content--block">
                            <h4>Email: </h4>
                            <p>pet@vet.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-map">
                <p>Closest vets to current location</p>
            </section>
            <section className="section-resources">
                <p>Additional Resources</p>
                <p>Eventual Chat with a Vet</p>
            </section>


        </div>
    )
}

export default EmergencyInfo;