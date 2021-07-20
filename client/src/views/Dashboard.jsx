import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import logo from '../static/images/PawPrintLogo.jpg';
import NavMenu from "../components/NavMenu";
import LogoNav from "../components/LogoNav";

const Dashboard = () => {



    return (
        <div>
            <LogoNav />
            <section className="pet-profiles">
                <h2 className="heading-2">
                    My Pets
                </h2>
                <div className="row">
                    <div className="pet-profile">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="pet-profile__pic" />
                        <h4 className="pet-profile__name">Rufus</h4>
                    </div>
                    <div className="pet-profile">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="pet-profile__pic" />
                        <h4 className="pet-profile__name">Rufus</h4>
                    </div>
                    <div className="pet-profile">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="pet-profile__pic" />
                        <h4 className="pet-profile__name">Rufus</h4>
                    </div>
                    <div className="pet-profile">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="pet-profile__pic" />
                        <h4 className="pet-profile__name">Rufus</h4>
                    </div>
                </div>
            </section>
            <section className="friend-profiles">
                <row className="friend-profile">
                    <h2 className="heading-2">
                        Friend Profiles
                    </h2>
                    <div className="row">
                        <div className="friend-profile__person">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                            <h4 className="friend-profile__person--name">Rufus</h4>
                        </div>
                        <div className="friend-profile__person">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                            <h4 className="friend-profile__person--name">Rufus</h4>
                        </div>
                        <div className="friend-profile__person">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                            <h4 className="friend-profile__person--name">Rufus</h4>
                        </div>
                        <div className="friend-profile__person">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                            <h4 className="friend-profile__person--name">Rufus</h4>
                        </div>
                        <div className="friend-profile__person">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                            <h4 className="friend-profile__person--name">Rufus</h4>
                        </div>
                    </div>
                </row>
                <row className="friend-profile">
                    <h2 className="heading-2">
                        Pet Profiles
                    </h2>
                    <div className="row">
                        <div className="friend-profile__pet">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__pet--pic" />
                            <h4 className="friend-profile__pet--name">Rufus Owner</h4>
                        </div>
                        <div className="friend-profile">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__pet--pic" />
                            <h4 className="friend-profile__pet--name">Rufus Owner</h4>
                        </div>
                        <div className="friend-profile">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__pet--pic" />
                            <h4 className="friend-profile__pet--name">Rufus Owner</h4>
                        </div>
                        <div className="friend-profile">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__pet--pic" />
                            <h4 className="friend-profile__pet--name">RuRufus Ownerfus</h4>
                        </div>
                        <div className="friend-profile">
                            <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__pet--pic" />
                            <h4 className="friend-profile__pet--name">Rufus Owner</h4>
                        </div>
                    </div>
                </row>
            </section>

        </div>
    )
}

export default Dashboard;