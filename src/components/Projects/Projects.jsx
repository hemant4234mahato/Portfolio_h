import React from 'react';
import './Projects.css';
import image_p4 from '../../assets/images/p4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
  const data = [
    {
      src: image_p4,
      url: "#!",
      title: "Outserved Reports 1"
    },
    {
      src: image_p4,
      url: "#!",
      title: "Outserved Reports 2"
    },
    {
      src: image_p4,
      url: "#!",
      title: "Outserved Reports 3"
    }
  ];

  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-box">
              <a href={project.url}>
                <img src={project.src} alt={project.title} />
                <div className="p-overlayer">
                  <strong>{project.title}</strong>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="github-btn">
        <a href="https://github.com/" className="btn-link">
          My Github <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
