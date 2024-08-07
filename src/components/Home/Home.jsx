import React from 'react';
import './Home.css';
import p4 from '../../assets/images/p4.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported

export const Home = () => {
  return (
    <section id="home">
      <div className='home-text' data-aos="fade-up" >
        <strong>Hello, it's me</strong>
        <h1>Hemant Kumar</h1>
        <p>I am a skilled Web Developer and Designer with knowledge of programming
          languages, including C++, HTML, CSS, and JavaScript. With a passion for
          coding and a goal to excel as both a coder and developer, I bring a strong
          foundation in web development and a commitment to continuous learning.
          My aim is to find innovative solutions and become a standout professional in
          the field.</p>
        
      </div>

      <div className="home-img" data-aos="fade-down">
        <div className="img-box">
          <img src={p4} alt="Hemant Kumar" />
          <h2>Hemant Kumar <br /><span>Full-stack developer</span></h2>

          {/* <div className="social">
            <a href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#!">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div> */}

          <a href="#!" className='hire-me'>Comments</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
