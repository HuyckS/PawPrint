import React from "react";
import '../sass/main.scss';


const LoginAndReg = () => {


    return (
        <>
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
        </>
    )
}

export default LoginAndReg;