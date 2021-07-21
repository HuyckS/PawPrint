import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import pic from '../static/images/dog_1-resized.jpg';
import pet1 from '../static/images/blue-dog-resized.jpg';
import pet2 from '../static/images/hamster-resized.jpg';
import pet3 from '../static/images/blue-fish-resized.jpg';
import pet4 from '../static/images/grey-cat-resized.jpg';
import petfriend1 from '../static/images/brown-horse-resized.jpg';
import petfriend2 from '../static/images/dog_2-resized.jpg';
import petfriend3 from '../static/images/green-cat-resized.jpg';
import petfriend4 from '../static/images/orange-puppy-resized.jpg';
import petfriend5 from '../static/images/orange-cat-resized.jpg';

import NavMenu from "../components/NavMenu";
import LogoNav from "../components/LogoNav";
import Header2 from "../components/Header2";

const Dashboard = () => {



    return (
        <div className="dashboard">
            <Header2 />
            <LogoNav />
            <div className="wrapper">
                <section className="section-profiles u-margin-bottom-small">
                    <div className="profiles__box profiles__box--1">
                        <h2 className="heading-2">
                            My Pets
                        </h2>
                        <div className="profiles__profile">
                            <figure className="profiles__profile-shape">
                                <img src={pet1} alt="pet" className="profiles__profile-shape--pic" />
                            </figure>
                            <h4 className="profiles__profile-name">Apollo</h4>
                        </div>
                        <div className="profiles__profile">
                            <figure className="profiles__profile-shape">
                                <img src={pet2} alt="pet" className="profiles__profile-shape--pic" />
                            </figure>
                            <h4 className="profiles__profile-name">Teddy</h4>
                        </div>
                        <div className="profiles__profile">
                            <figure className="profiles__profile-shape">
                                <img src={pet3} alt="pet" className="profiles__profile-shape--pic" />
                            </figure>
                            <h4 className="profiles__profile-name">Doby</h4>
                        </div>
                        <div className="profiles__profile">
                            <figure className="profiles__profile-shape">
                                <img src={pet4} alt="pet" className="profiles__profile-shape--pic" />
                            </figure>
                            <h4 className="profiles__profile-name">Sage</h4>
                        </div>
                    </div>
                    <div className="profiles__box profiles__box--2">
                        <h2 className="heading-2">
                            Friend Profiles
                        </h2>
                        <div className="profiles__friend">
                            <figure className="profiles__friend-shape">
                                <img src={pic} alt="pet" className="profiles__friend-shape--pic" />
                            </figure>
                            <h4 className="profiles__friend-name">Tim</h4>
                        </div>
                        <div className="profiles__friend">
                            <figure className="profiles__friend-shape">
                                <img src={pic} alt="pet" className="profiles__friend-shape--pic" />
                            </figure>
                            <h4 className="profiles__friend-name">Ash</h4>
                        </div>
                        <div className="profiles__friend">
                            <figure className="profiles__friend-shape">
                                <img src={pic} alt="pet" className="profiles__friend-shape--pic" />
                            </figure>
                            <h4 className="profiles__friend-name">Mina</h4>
                        </div>
                        <div className="profiles__friend">
                            <figure className="profiles__friend-shape">
                                <img src={pic} alt="pet" className="profiles__friend-shape--pic" />
                            </figure>
                            <h4 className="profiles__friend-name">River Road Veterinarian</h4>
                        </div>
                        <div className="profiles__friend">
                            <figure className="profiles__friend-shape">
                                <img src={pic} alt="pet" className="profiles__friend-shape--pic" />
                            </figure>
                            <h4 className="profiles__friend-name">All Stars Pet Training</h4>
                        </div>
                    </div>
                    <div className="profiles__box profiles__box--3 u-margin-bottom-big">
                        <h2 className="heading-2">
                            Pet Profiles
                        </h2>
                        <div className="profiles__pet">
                            <figure className="profiles__pet-shape">
                                <img src={petfriend1} alt="pet" className="profiles__pet-shape--pic" />
                            </figure>
                            <h4 className="profiles__pet-name">Rufus</h4>
                        </div>
                        <div className="profiles__pet">
                            <figure className="profiles__pet-shape">
                                <img src={petfriend2} alt="pet" className="profiles__pet-shape--pic" />
                            </figure>
                            <h4 className="profiles__pet-name">Spot</h4>
                        </div>
                        <div className="profiles__pet">
                            <figure className="profiles__pet-shape">
                                <img src={petfriend3} alt="pet" className="profiles__pet-shape--pic" />
                            </figure>
                            <h4 className="profiles__pet-name">Iago</h4>
                        </div>
                        <div className="profiles__pet">
                            <figure className="profiles__pet-shape">
                                <img src={petfriend4} alt="pet" className="profiles__pet-shape--pic" />
                            </figure>
                            <h4 className="profiles__pet-name">Squirt</h4>
                        </div>
                        <div className="profiles__pet">
                            <figure className="profiles__pet-shape">
                                <img src={petfriend5} alt="pet" className="profiles__pet-shape--pic" />
                            </figure>
                            <h4 className="profiles__pet-name">Dory</h4>
                        </div>
                    </div>
                </section >
            </div >

        </div >
    )
}

export default Dashboard;