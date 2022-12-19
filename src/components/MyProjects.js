import "../styles/MyProjects/myProjects.css";
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import eCommerce from "../assets/myProjectsPictures/E-commerce.png";
import TMDB from "../assets/myProjectsPictures/Movie_Database.png";
import portfolio from "../assets/myProjectsPictures/Portfolio.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Button from "./Button";

function MyProjects() {
  const [projectTitle, setProjectTitle] = useState("");
  return (
    <div id="projects" className="myProjectsContainer">
      <div className="swiperContainer">
        <Button
          className="projectsTitle"
          size="3vw"
          background="lime"
          color="white"
          text={projectTitle ? projectTitle : "Al lío E-commerce"}
        />
        <div className="button-prev-slide">
          <GoArrowLeft className="carouselNavigationIcon" />
        </div>
        <div className="button-next-slide">
          <GoArrowRight className="carouselNavigationIcon" />
        </div>
        <div className="swiper-wrapper">
          <Swiper
            onSlideChange={(e) => {
              setProjectTitle(e.slides[e.snapIndex].id);
            }}
            loop={true}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide id="Al lío E-commerce" className="swiperPicture">
              <img alt="alLioEcommerce" src={eCommerce}></img>
              <div className="swiperButtonsContainer">
                <Button
                  href="https://github.com/BStar098/al_lio_front_repo"
                  className="swiperButtons"
                  size="3vw"
                  background="lime"
                  color="white"
                  text="Front repo."
                />
                <Button
                  href="https://github.com/BStar098/al_lio_back_repo"
                  className="swiperButtons"
                  size="3vw"
                  background="lime"
                  color="white"
                  text="Back repo."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide id="TMDB Clone" className="swiperPicture">
              <img alt="TMDBClone" src={TMDB}></img>
              <div className="swiperButtonsContainer">
                <Button
                  href="https://github.com/BStar098/26-checkpoint-TMDB"
                  className="swiperButtons"
                  size="3vw"
                  background="lime"
                  color="white"
                  text="Main Repo."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide id="My Brutalist Portfolio" className="swiperPicture">
              <img alt="myPortfolio" src={portfolio}></img>
              <div className="swiperButtonsContainer">
                <Button
                  href="https://github.com/BStar098/bstar098Portfolio"
                  className="swiperButtons"
                  size="3vw"
                  background="lime"
                  color="white"
                  text="Main repo."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide id="RRHH Mobile App" className="swiperPicture">
              <iframe
                width="100%"
                height="90%"
                src="https://www.youtube.com/embed/odtPaT5Qf0I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="swiperButtonsContainer">
                <Button
                  href="https://github.com/BStar098/FRONT-App-RRHH"
                  className="swiperButtons"
                  size="3vw"
                  background="lime"
                  color="white"
                  text="Front repo."
                />
                <Button
                  href="https://github.com/BStar098/BACK-App-RRHH"
                  className="swiperButtons"
                  size="3vw"
                  background="lime"
                  color="white"
                  text="Back repo."
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
