import "../style.css";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Contact() {
    return (
        <div className="">
        <Nav />
        <h1 className="contact__heading">Contact</h1>
        <h3><Link to="mailto:mirelkorajac@gmail.com">mirelkorajac@gmail.com</Link></h3>
        </div>
    )
}

export default Contact;