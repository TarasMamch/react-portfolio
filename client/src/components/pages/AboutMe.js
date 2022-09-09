import React from "react";

export default function Footer() {
    return (
        <div>
            <div className="hero">
                <h1>Portfolio</h1>
            </div>
            <div className="body-section">
                <div className="side-nav-container">About Me</div>
                <a id="about-me"></a>
                <div className="content-container" id="about-me-page">
                    {/* <img src="./assets/images/ya-boi.jpg" className="about-me-img" alt="Ya Boi"> */}
                    <p>I'm currently a student at University of Washington for a coding bootcamp. Previously I worked as a truck
                        driver for about 2 years. I've always loved tech and coding and now decided to try and pursue a career
                        in it. I've really grown to love it and I'm ready to keep learning more and gain more exerience.</p>
                </div>
            </div>
        </div>
    )
}