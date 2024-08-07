import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-heading">
                    <strong>
                        About Us
                    </strong>
                    <h3>
                        designing with passion for problem solving skill
                    </h3>
                    <a href="tel:number" className='btn-link'>
                        9334520315 <i className="fa-solid fa-phone-flip"></i>
                    </a>
                </div>

                <div className="about-details">
                    I am a Web Developer and Designer skilled in developing intuitive and efficient applications. I am driven by curiosity and a commitment to continuous learning. I am eager to contribute my technical expertise and creative problem-solving skills to forward-thinking teams and impactful projects.With a passion for technology and continuous learning, I am eager to contribute to innovative projects and make a meaningful impact in the tech industry.
                </div>
            </div>
        </section>
    )
}

export default About
