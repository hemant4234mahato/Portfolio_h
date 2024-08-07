import React from 'react';
import './Languages.css';

const Languages = () => {
    const data = [
        {
            title: "Languages",
            contents: ["C/C++", "Basics of Python and Java", "HTML/CSS/JavaScript", "Kotlin", "Data Structures and Algorithms"]
        },
        {
            title: "Web Development",
            contents: ["Bootstrap", "React", "Node.js", "SQL/NoSQL Databases"]
        },
        {
            title: "Android Development",
            contents: ["Jetpack Compose", "Retrofit"]
        },
        {
            title: "Version Control",
            contents: ["GitHub"]
        },
        {
            title: "Tools",
            contents: ["Visual Studio Code", "Git", "Apache", "Android Studio", "Figma"]
        }
    ]

    return (
        <section id="languages">
            {data.map(item => (
                <div className="languages-box" key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.contents.map(content => (
                            <li key={content}>{content}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Languages;
