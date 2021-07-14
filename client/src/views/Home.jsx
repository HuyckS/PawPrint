import { Link, navigate } from "@reach/router";
import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import FeaturesBox from "../components/FeaturesBox";
import Footer from "../components/Footer";
import '../sass/main.scss';
import bird from "../static/images/green-bird.jpg";
import puppy from "../static/images/red-dog.jpg";
import cat from "../static/images/yellow-cat.jpg";
import logo from '../static/images/PawPrintLogo.jpg';

const Home = () => {
    const { firstName, setFirstName } = useState("");
    const { lastName, setLastName } = useState("");
    const { email, setEmail } = useState("");
    const { phone, setPhone } = useState("");
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    const { confirm, setConfirm } = useState("");

    return (
        <div>
            <NavMenu />
            <Header />
            <section className="section-about">
                <div className="about-background u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Organize the care for your pet and connect with your community!
                    </h2>
                </div>
                <div className="row">
                    <div className="summary">
                        <img
                            src={bird}
                            alt="bird"
                            className="summary__photo summary__photo--p1"
                        />
                        <img
                            src={puppy}
                            alt="puppy"
                            className="summary__photo summary__photo--p2"
                        />
                        <img
                            src={cat}
                            alt="cat"
                            className="summary__photo summary__photo--p3"
                        />
                    </div>
                </div>
                <div className="row u-margin-top-huge">
                    <div className="col-1-of-3 u-border-right">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Records & Reminders
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis
                            repellat. Nobis corrupti ipsa explicabo animi provident.
                            Temporibus vero fugiat aliquid eaque. Veritatis optio, culpa
                            facere velit quae cum! Totam!
                        </p>
                    </div>
                    <div className="col-1-of-3 u-border-right">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Connect with your community
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis
                            repellat. Nobis corrupti ipsa explicabo animi provident.
                            Temporibus vero fugiat aliquid eaque. Veritatis optio, culpa
                            facere velit quae cum! Totam!
                        </p>
                    </div>
                    <div className="col-1-of-3">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Access veterinarian services
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis
                            repellat. Nobis corrupti ipsa explicabo animi provident.
                            Temporibus vero fugiat aliquid eaque. Veritatis optio, culpa
                            facere velit quae cum! Totam!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>

            </section>
            <FeaturesBox />
            <Footer />
        </div >
    )
}

export default Home;