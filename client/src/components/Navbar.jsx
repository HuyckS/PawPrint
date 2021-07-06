import { Link, navigate } from "@reach/router";
import { useState } from "react";
import { styles } from '../sass/main.scss';
import homeIcon from '../static/images/home_icon.jpg';
import chatIcon from '../static/images/chat_icon.png';
import bellIcon from '../static/images/bell_icon.png';
import emergencyIcon from '../static/images/emergency_icon.png';
import profileIcon from '../static/images/profile_icon.png';


const Navbar = () => {


    return (
        <div>
            <div><img src={homeIcon} alt="home" width="50px" height="50px" /><h3>Home</h3></div>
            <div><img src={chatIcon} alt="chat" width="50px" height="50px" /><h3>Chat</h3></div>
            <div><img src={bellIcon} alt="notifications" width="50px" height="50px" /><h3>Notifications</h3></div>
            <div><img src={emergencyIcon} alt="emergency" width="50px" height="50px" /><h3>Emergency Information</h3></div>
            <div><img src={profileIcon} alt="profile" width="50px" height="50px" /><h3>Profile</h3></div>
        </div>
    )
}

export default Navbar;