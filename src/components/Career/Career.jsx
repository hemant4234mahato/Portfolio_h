import React from 'react'
import './Career.css'
import cv from '../../assets/cv/cv.pdf';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Career = () => {
    // const careers = [
    //     {
    //         title: "frontend dev",
    //         name: "software",
    //         year: "2018 - 2020"
    //     },
    //     {
    //         title: "frontend dev",
    //         name: "software",
    //         year: "2018 - 2020"
    //     }
    // ]
    const educations = [
        {
            title: "Silicon University",
            name: "Bachelor of Engineering–CEN Undergraduate",
            year: "2021 - 2025"
        },
        {
            title: "Jamshedpur Public School",
            name: "Intermediate ",
            year: "2019 - 2020"
        }
    ]
    return (
        <section id="career">
            <div className="career-education">
                {/* <div className="career">
                    <h3>
                        Career
                    </h3>

                    <div className="c-b-container">
                        {
                            careers.map((career, index) => (
                                <div className="c-box" key={index}>
                                    <h4>{career.title}</h4>
                                    <strong>{career.name}</strong>
                                    <span>{career.year}</span>
                                </div>
                            ))
                        }
                    </div>
                </div> */}

                <div className="career edu">
                    <h3>
                        Education
                    </h3>

                    <div className="c-b-container">
                        {
                            educations.map((career, index) => (
                                <div className="c-box" key={index}>
                                    <h4>{career.title}</h4>
                                    <strong>{career.name}</strong>
                                    <span>{career.year}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
            {/* <div className="btn-c">
                <a href={cv} download className='btn-link'></a>
                GET CV <i className="fa-solid fa-download"></i>
            </div> */}
        </section>
    )
}


export default Career
