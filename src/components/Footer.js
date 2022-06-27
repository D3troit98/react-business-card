import React from "react";
import "../index.css"
import twitterLogo from "../images/Twitter Icon.png"
import facebookLogo from "../images/Facebook Icon.png"
import instaLogo from "../images/Instagram Icon.png"
import githubLogo from "../images/GitHub Icon.png"
export default function Footer()
{
    return(
       <footer className="footer-list">
            <img src={twitterLogo} alt="twitter" className="footer-logo1" />
            <img src={facebookLogo} alt="facebook" className="footer-logo" />
            <img src={instaLogo} alt="instagram" className="footer-logo" />
            <img src={githubLogo} alt="github" className="footer-logo4" />
        </footer>
    )
}