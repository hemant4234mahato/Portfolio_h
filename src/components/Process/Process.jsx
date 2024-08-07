import React from 'react';
import './Process.css';

const Process = () => {
    const data = [
        {
            id: "01",
            title: "•	Ultimate Boot Camp in Web Development from PREP LABS",
            // contents: ["Collect Info", "Personas", "Setup Goals"]
        },
        {
            id: "02",
            title: "•	Full Stack PHP from Syllogistek",
            // contents: ["Collect Info", "Personas", "Setup Goals"]
        },
        // {
        //     id: "03",
        //     title: "Pre-Process",
        //     contents: ["Collect Info", "Personas", "Setup Goals"]
        // },
        // {
        //     id: "04",
        //     title: "Pre-Process",
        //     contents: ["Collect Info", "Personas", "Setup Goals"]
        // },
        // {
        //     id: "05",
        //     title: "Pre-Process",
        //     contents: ["Collect Info", "Personas", "Setup Goals"]
        // }
    ];

    return (
        <section id="process">
            <div className="process-heading">
                <h3>CERTIFICATIONS</h3>
            </div>

            <div className="process-container">
                {data.map(process => (
                    <div className="process-box" key={process.id}>
                        <span>{process.id}</span>
                        <strong>{process.title}</strong>
                        {/* <ul>
                            {process.contents.map(content => (
                                <li key={content}>{content}</li>
                            ))}
                        </ul> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
