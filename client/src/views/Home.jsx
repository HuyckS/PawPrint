import { Link, navigate } from "@reach/router";
import { useState } from "react";
import { styles } from '../sass/main.scss';
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
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <section>
                <div>
                    <button>Login</button>
                    <form action="/login" method="post">
                        <label>Username:</label>
                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                        <label>Password:</label>
                        <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="submit" value="Sign In" />
                    </form>
                </div>
                <div>
                    <button>Register</button>
                    <form action="/register" method="post">
                        <label>First Name:</label>
                        <input type="text" onChange={(e) => { setFirstName(e.target.value) }} />
                        <label>Last Name:</label>
                        <input type="text" onChange={(e) => { setLastName(e.target.value) }} />
                        <label>Email:</label>
                        <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                        <label>Phone:</label>
                        <input type="text" onChange={(e) => { setPhone(e.target.value) }} />
                        <label>Username:</label>
                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                        <label>Password:</label>
                        <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
                        <label>Confirm Password:</label>
                        <input type="text" onChange={(e) => { setConfirm(e.target.value) }} />
                        <input type="submit" value="Join" />
                    </form>
                </div>
            </section>
            <section>
                <div>
                    <h2>Organize</h2>
                    <p>Helps you keep track of your pets with notifications on feeding, giving medicine, appointments... anything they might need.</p>
                </div>
                <div>
                    <h2>Share</h2>
                    <p>Need help watching your pet? Develop contacts with various pet organizations, friends, and family to be able to chat and stay connected about your pets while you are away.</p>
                </div>
                <div>
                    <h2>Care</h2>
                    <p>Get access to local emergency vet locations and helpful numbers to contact in the event of an emergency. Also include a live chat with a veterinarian.</p>
                </div>
                <div>
                    <h2>Donate</h2>
                    <p>Donate to a non-profit, pet friendly cause in your pet's name - whether celebrating their birthday, their life, or on a regular day; you and your pet can help others in need.</p>
                </div>
                <div>
                    <h2>Accessorize</h2>
                    <p>Find local and popular sites selling the best training gear, food, and accessories for your pet.</p>
                </div>
            </section>
        </div>
    )
}

export default Home;