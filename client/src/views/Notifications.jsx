import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import LogoNav from "../components/LogoNav";

const Notifications = () => {



    return (
        <div>
            <LogoNav />
            <section className="reminders">
                <p>Daily</p>
                <p>Monthly</p>
                <p>Yearly</p>
            </section>
        </div>
    )
}

export default Notifications;