import React from 'react';
import './Summary.css';
import cv from '../../assets/cv/cv.pdf';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported

const Summary = () => {
    return (
        <div>
            <section id='summary'>
                <div className="summary-heading">
                    <strong>
                        My Skillset
                    </strong>

                    {/* <h2>
                        Lorem ipsum dolor, sit jnfs jawnk jacn ajfncla.
                    </h2> */}
                    <br />
                    <a href={cv} download className='btn-link'>
                        GET CV <i className="fa-solid fa-download"></i>
                    </a>
                </div>

                {/* <div className="summary-details">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis repellat velit expedita dolores accusantium illum, error eligendi, recusandae molestiae numquam minus fugit tempore esse. Veniam ducimus repudiandae veritatis voluptate!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo quae odit ipsa, corrupti velit ad voluptatum facilis! Cum facere corporis quis explicabo voluptatum ipsa voluptatibus saepe architecto dolor doloremque!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus odio pariatur voluptates doloremque esse maiores veritatis repellendus repellat ipsa, et ea omnis cupiditate minima nesciunt porro odit delectus numquam dolor!
                    </p>
                </div> */}
            </section>
        </div>
    )
}

export default Summary;
