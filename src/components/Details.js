import React from "react";
import "../index.css"
import linkedInLogo from "../images/Linkedin Icon.png"
export default function Details()
{
    return(
        <div className="details-container">
            <h4 className="name">Duruaku Micheal</h4>
            <p className="job">Frontend Developer</p>
           <p className="website"><a href="https://inspiring-semolina-fe8e95.netlify.app">semolina</a></p> 
          <div className="buttonContainer">
            <button type="button" className="email-button">
                <span class="material-symbols-outlined">mail</span>
                <span className="button-text">Email</span>
            </button>

            <button type="button" className="linkedIn-button">
            <span ><img className="linkedin-text" src={linkedInLogo} alt="LinkedIn" /></span>
            <span class="linkedin">LinkedIn</span>
            </button>
            </div>




           <div className="explain-more">
               <h4 className="headers">About</h4>
               <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
               <br></br>
               <h4 className="headers">Interest</h4>
               <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
           </div>
        </div>
    )
}