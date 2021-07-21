import { Link, navigate } from "@reach/router";
import { useState } from "react";
import '../sass/main.scss';
import pic from '../static/images/dog_1.jpg';
import pet1 from '../static/images/blue-dog.jpg';
import pet2 from '../static/images/hamster.jpg';
import pet3 from '../static/images/blue-fish.jpg';
import pet4 from '../static/images/grey-cat.jpg';
import petfriend1 from '../static/images/brown-horse.jpg';
import petfriend2 from '../static/images/dog_2.jpg';
import petfriend3 from '../static/images/green-cat.jpg';
import petfriend4 from '../static/images/orange-puppy.jpg';
import petfriend5 from '../static/images/orange-cat.jpg';

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
                    <div className="section-profiles__box--1">
                        <h2 className="heading-2">
                            My Pets
                        </h2>
                        <div className="section-profiles__profile">
                            <img src={pet1} alt="pet" className="section-profiles__profile--pic" />
                            <h4 className="section-profiles__profile--name">Apollo</h4>
                        </div>
                        <div className="section-profiles__profile">
                            <img src={pet2} alt="pet" className="section-profiles__profile--pic" />
                            <h4 className="section-profiles__profile--name">Teddy</h4>
                        </div>
                        <div className="section-profiles__profile">
                            <img src={pet3} alt="pet" className="section-profiles__profile--pic" />
                            <h4 className="section-profiles__profile--name">Doby</h4>
                        </div>
                        <div className="section-profiles__profile">
                            <img src={pet4} alt="pet" className="section-profiles__profile--pic" />
                            <h4 className="section-profiles__profile--name">Sage</h4>
                        </div>
                    </div>
                    <div className="section-profiles__box--2">
                        <h2 className="heading-2">
                            Friend Profiles
                        </h2>
                        <div className="section-profiles__friend">
                            <img src={pic} alt="pet" className="section-profiles__friend--pic" />
                            <h4 className="section-profiles__friend--name">Tim</h4>
                        </div>
                        <div className="section-profiles__friend">
                            <img src={pic} alt="pet" className="section-profiles__friend--pic" />
                            <h4 className="section-profiles__friend--name">Ash</h4>
                        </div>
                        <div className="section-profiles__friend">
                            <img src={pic} alt="pet" className="section-profiles__friend--pic" />
                            <h4 className="section-profiles__friend--name">Mina</h4>
                        </div>
                        <div className="section-profiles__friend">
                            <img src={pic} alt="pet" className="section-profiles__friend--pic" />
                            <h4 className="section-profiles__friend--name">River Road Veterinarian</h4>
                        </div>
                        <div className="section-profiles__friend">
                            <img src={pic} alt="pet" className="section-profiles__friend--pic" />
                            <h4 className="section-profiles__friend--name">All Stars Pet Training</h4>
                        </div>
                    </div>
                    <div className="section-profiles__box--3 u-margin-bottom-big">
                        <h2 className="heading-2">
                            Pet Profiles
                        </h2>
                        <div className="section-profiles__pet">
                            <img src={petfriend1} alt="pet" className="section-profiles__pet--pic" />
                            <h4 className="section-profiles__pet--name">Rufus</h4>
                        </div>
                        <div className="section-profiles__pet">
                            <img src={petfriend2} alt="pet" className="section-profiles__pet--pic" />
                            <h4 className="section-profiles__pet--name">Spot</h4>
                        </div>
                        <div className="section-profiles__pet">
                            <img src={petfriend3} alt="pet" className="section-profiles__pet--pic" />
                            <h4 className="section-profiles__pet--name">Iago</h4>
                        </div>
                        <div className="section-profiles__pet">
                            <img src={petfriend4} alt="pet" className="section-profiles__pet--pic" />
                            <h4 className="section-profiles__pet--name">Squirt</h4>
                        </div>
                        <div className="section-profiles__pet">
                            <img src={petfriend5} alt="pet" className="section-profiles__pet--pic" />
                            <h4 className="section-profiles__pet--name">Dory</h4>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Dashboard;