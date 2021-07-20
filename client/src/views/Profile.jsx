import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import logo from '../static/images/PawPrintLogo.jpg';
import NavMenu from "../components/NavMenu";
import LogoNav from "../components/LogoNav";

const Profile = () => {



    return (
        <div>
            <LogoNav />
            <section className="pet-profiles">
                <p>Change Username</p>
                <p>Change Password</p>
                <p>Edit Profile</p>
                <p>Remove Friend</p>
                <p>Move Pet</p>
            </section>

        </div>
    )
}

export default Profile;