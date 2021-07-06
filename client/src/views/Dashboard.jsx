import { Link, navigate } from "@reach/router";
import { useState } from "react";
import { styles } from '../sass/main.scss';
import logo from '../static/images/PawPrintLogo.jpg';
import Navbar from "../components/Navbar";

const Dashboard = () => {



    return (
        <div>
            <div>
                <img src={logo} alt="logo" />
                <Navbar />
            </div>

        </div>
    )
}

export default Dashboard;