import React from "react"

//assets
import Developer from '../../assets/developer.JPG'
//css
import './about.css'

function About() {
    return (
        <div className="container" style={{ marginBottom: "1%" }}>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <div className="card" style={{ borderRadius: "1.25rem", marginTop: "1rem" }}>
                <img src={Developer} alt="harissa" style={{ width: "100%" }} />
                <h1 style={{ fontSize: '2rem', fontWeight: "bold", fontStyle: 'italic' }}>Ahmad Harissa</h1>
                <p className="title">Web Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>ahmadharissa25@gmail.com</p>
                <div style={{ margin: "5%" }}>
                    <a target="_blank" rel="noreferrer" href={"https://www.facebook.com/ahmadkharissa"}><i className="bi bi-facebook"></i></a>
                    <a target="_blank" rel="noreferrer" href={"https://www.instagram.com/ahmadkharissa/"}><i className="bi bi-instagram"></i></a>
                    <a target="_blank" rel="noreferrer" href={"https://twitter.com/ahmadkharissa"}><i className="bi bi-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About