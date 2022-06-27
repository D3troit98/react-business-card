import React from "react";
import profilePic from "../images/Rectangle 90.png"

export default function Image()
{
    return(
        <div className="profile">
            <img src={profilePic} alt="profile" className="profile-logo" />
         </div>
    )
}