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
            <section className="section-contacts">
                <h3>My Contacts</h3>
                <div className="row">
                    <h2>Contacts</h2>
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
            <section className="section-conversations">
                <div className="conversation-box">
                    <div className="friend-profile__person">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                    </div>
                    <div className="conversation-box__content">
                        <h3 className="conversation-box__contact">Teddy</h3>
                        <p className="conversation-box__time">1:00pm</p>
                    </div>
                </div>
                <div className="conversation-box">
                    <div className="friend-profile__person">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                    </div>
                    <div className="conversation-box__content">
                        <h3 className="conversation-box__contact">Teddy</h3>
                        <p className="conversation-box__time">1:00pm</p>
                    </div>
                </div>
                <div className="conversation-box">
                    <div className="friend-profile__person">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                    </div>
                    <div className="conversation-box__content">
                        <h3 className="conversation-box__contact">Teddy</h3>
                        <p className="conversation-box__time">1:00pm</p>
                    </div>
                </div>
                <div className="conversation-box">
                    <div className="friend-profile__person">
                        <img src="../static/images/dog_1.jpg" alt="pet" className="friend-profile__person--pic" />
                    </div>
                    <div className="conversation-box__content">
                        <h3 className="conversation-box__contact">Teddy</h3>
                        <p className="conversation-box__time">1:00pm</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Chat;