import { Link, navigate } from "@reach/router";
import { useState } from "react";
import LogoNav from "../components/LogoNav";
import '../sass/main.scss';


const Chat = () => {



    return (
        <div>
            <LogoNav />
            <section className="profile-search">
                <div><h3>SEARCHBOX</h3></div>
            </section>
            <section>
                <h3>My Contacts</h3>
                <div className="row">
                    <h4>Pets</h4>
                    <div className="pet-contact">
                        <div className="pet-contact__box">
                            <img src="#" alt="#" className="pet-contact__pic" />
                            <h4 className="pet-contact__name">Rufus</h4>
                        </div>
                        <div className="pet-contact__box">
                            <img src="#" alt="#" className="pet-contact__pic" />
                            <h4 className="pet-contact__name">Rufus</h4>
                        </div>
                        <div className="pet-contact__box">
                            <img src="#" alt="#" className="pet-contact__pic" />
                            <h4 className="pet-contact__name">Rufus</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h4>People</h4>
                    <div className="people-contact">
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
                </div>
            </section>
        </div>
    )
}

export default Chat;