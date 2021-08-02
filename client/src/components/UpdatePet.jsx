import React, { useState } from "react";
import '../sass/main.scss';
import logo2 from "../static/images/PawPrintLogo2.png";

const UpdatePet = () => {

    const { petName, setPetName } = useState("");
    const { type, setType } = useState("");
    const { desc, setDesc } = useState("");
    const { age, setAge } = useState("");
    const { veterinarian, setVeterinarian } = useState("");
    const { foodSchedule, setFoodSchedule } = useState("");
    const { medications, setMedications } = useState("");
    const { notes, setNotes } = useState("");

    return (
        <>
            <div>
                <button>Register</button>
                <form action="/register" method="post">
                    <label>Name:</label>
                    <input type="text" onChange={(e) => { setPetName(e.target.value) }} />
                    <label>Animal Type:</label>
                    <input type="text" onChange={(e) => { setType(e.target.value) }} />
                    <label>Description:</label>
                    <input type="text" onChange={(e) => { setDesc(e.target.value) }} />
                    <label>Age:</label>
                    <input type="text" onChange={(e) => { setAge(e.target.value) }} />
                    <label>Veterinarian:</label>
                    <input type="text" onChange={(e) => { setVeterinarian(e.target.value) }} />
                    <label>Food:</label>
                    <input type="text" onChange={(e) => { setFoodSchedule(e.target.value) }} />
                    <label>Medications:</label>
                    <input type="text" onChange={(e) => { setMedications(e.target.value) }} />
                    <label>Notes:</label>
                    <input type="text" onChange={(e) => { setNotes(e.target.value) }} />
                    <input type="submit" value="Join" />
                </form>
            </div>
        </>
    )
}

export default UpdatePet;