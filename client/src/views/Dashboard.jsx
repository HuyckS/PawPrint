import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import logo from '../static/images/PawPrintLogo.jpg';
import NavMenu from "../components/NavMenu";

const Dashboard = () => {



    return (
        <div>
            <div>
                <img src={logo} alt="logo" />
                <NavMenu />
            </div>

        </div>
    )
}

export default Dashboard;