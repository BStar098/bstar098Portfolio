import "../styles/MyProjects/myProjects.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import eCommerce from "../assets/myProjectsPictures/E-commerce.png";
import TMDB from "../assets/myProjectsPictures/Movie_Database.png";
import portfolio from "../assets/myProjectsPictures/Portfolio.png";

function MyProjects() {
  return (
    <div id="projects" className="myProjectsContainer">
      <h1 className="myProjectsTitle">Click the pictures ;)</h1>
      <div className="swiperContainer">
        <div className="swiper-wrapper">
          <Swiper
            loop={true}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide className="swiperPicture">
              <a
                href="https://github.com/BStar098/al_lio_front_repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="alLioEcommerce" src={eCommerce}></img>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiperPicture">
              <a
                href="https://github.com/BStar098/26-checkpoint-TMDB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="TMDBClone" src={TMDB}></img>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiperPicture">
              <a
                href="https://github.com/BStar098/bstar098Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="myPortfolio" src={portfolio}></img>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiperPicture">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/odtPaT5Qf0I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
