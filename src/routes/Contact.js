import "../style.css";
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="Contact">
        <h1>Contact</h1>
        <h3><Link to="mailto:mirelkorajac@gmail.com">mirelkorajac@gmail.com</Link></h3>
        </div>
    )
}

export default Contact;