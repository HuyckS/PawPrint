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
            <section className="emergency-info">
                <p>Vet Location/information</p>
                <p>Closest vets to current location</p>
                <p>Additional Resources</p>

            </section>

        </div>
    )
}

export default EmergencyInfo;