import React from "react"
import  Details from "./components/Details"
import Footer from "./components/Footer";
import Image from "./components/Image";

export default function App()
{
    return(
        
        <div className="app-container">
                <Image />
                <Details />
                <Footer />
        </div>
    )
}
