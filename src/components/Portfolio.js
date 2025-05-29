import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";
import ProjectModal from "./modals/ProjectModal";

const projects = [
  {
    title: "Magic Art",
    description: "A platform for generating AI-powered artwork.",
    techStack: ["React", "Next.js", "Tailwind", "Firebase"],
    images: [
      "/img/portfolio/recrutement/irecrutement_1.png",
      "/img/portfolio/recrutement/irecrutement_2.png",
      "/img/portfolio/recrutement/irecrutement_3.png",
      "/img/portfolio/recrutement/irecrutement_4.png",
    ],
  },
  {
    title: "Bona Green",
    description: "A sustainable farming analytics dashboard.",
    techStack: ["Vue", "Node.js", "MongoDB"],
    images: ["/img/portfolio/recrutement/3.jpg", "/img/portfolio/4.jpg"],
  },
  {
    title: "Leo Dandora",
    description: "A personal portfolio website with animations.",
    techStack: ["React", "Framer Motion", "Vercel"],
    images: ["/img/portfolio/5.jpg", "/img/portfolio/6.jpg"],
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Fragment>
      <div className="kura_tm_section" id="portfolio">
        <div className="kura_tm_portfolio">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Portfolio</span>
              <h3>Selected Works</h3>
            </div>
            <div
              className="portfolio_list gallery_zoom wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper {...portfolioSlider}>
                    {projects.map((project, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="list_inner">
                          <div
                            className="image"
                            onClick={() => setActiveProject(project)}
                          >
                            <img src="/img/portfolio/410-460.jpg" alt="" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${project.images[0]})`,
                              }}
                            ></div>
                            <div className="overlay"></div>
                            <img
                              className="svg"
                              src="/img/svg/right-arrow.svg"
                              alt=""
                            />
                            <div className="details">
                              <h3>{project.title}</h3>
                              <span>Project</span>
                              <ul className="tech-stack">
                                {project.techStack.map((tech, i) => (
                                  <li key={i}>{tech}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <a
                            className="kura_tm_full_link"
                            onClick={() => setActiveProject(project)}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="kura_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style jsx global>{`
        .kura_tm_main_title {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }
        .kura_tm_main_title span {
          display: inline-block;
          margin-bottom: 10px;
          color: #ff4522;
          font-family: "Poppins";
          font-weight: 500;
        }
        .kura_tm_main_title h3 {
          font-weight: 800;
          text-transform: uppercase;
        }
        .kura_tm_portfolio {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 140px 0px 138px 0px;
        }
        .kura_tm_portfolio .portfolio_list {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding-top: 92px;
        }
        .kura_tm_portfolio .portfolio_list .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }
        .kura_tm_portfolio .portfolio_list .image {
          position: relative;
          cursor: pointer;
        }
        .kura_tm_portfolio .portfolio_list .image img {
          position: relative;
          min-width: 100%;
          opacity: 0;
        }
        .kura_tm_portfolio .portfolio_list .image .main {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-radius: 10px;
          height: 460px;
        }
        .kura_tm_portfolio .portfolio_list .overlay {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 10px;
          right: 10px;
          background-color: rgba(255, 255, 255, 0.85);
          border-radius: 10px;
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .kura_tm_portfolio .portfolio_list .list_inner:hover .overlay {
          opacity: 1;
          visibility: visible;
        }
        .kura_tm_portfolio .portfolio_list .details {
          position: absolute;
          z-index: 2;
          bottom: 41px;
          left: 49px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .kura_tm_portfolio .portfolio_list .list_inner:hover .details {
          opacity: 1;
          visibility: visible;
        }
        .kura_tm_portfolio .portfolio_list .details h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .kura_tm_portfolio .portfolio_list .details span {
          font-family: "Poppins";
        }
        .kura_tm_portfolio .portfolio_list .details .tech-stack {
          margin-top: 10px;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .kura_tm_portfolio .portfolio_list .details .tech-stack li {
          background-color: #ff4522;
          color: white;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 5px;
          font-family: "Poppins", sans-serif;
        }
        .kura_tm_portfolio .portfolio_list .image .svg {
          position: absolute;
          top: 40px;
          right: -120px;
          width: 50px;
          height: 50px;
          z-index: 2;
          transform: rotate(-50deg);
          color: #000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .kura_tm_portfolio .portfolio_list .list_inner:hover .image .svg {
          opacity: 1;
          visibility: visible;
        }
        .kura_tm_full_link {
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          z-index: 5;
        }
        .kura_tm_swiper_progress {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          clear: both;
          margin-top: 27px;
        }
        .kura_tm_swiper_progress .my_navigation ul {
          margin: 0px;
          list-style-type: none;
        }
        .kura_tm_swiper_progress .my_navigation ul li {
          margin: 0px 10px 0px 0px;
          display: inline-block;
        }
        .kura_tm_swiper_progress .my_navigation ul li:last-child {
          margin-right: 0px;
        }
        .kura_tm_swiper_progress .my_navigation ul li a {
          text-decoration: none;
          color: #000;
          transition: all 0.3s ease;
        }
        .kura_tm_swiper_progress .my_navigation ul li a:hover {
          color: #ff4522;
        }
        .kura_tm_swiper_progress .my_navigation ul li .svg {
          width: 27px;
          height: 27px;
        }
        .kura_tm_swiper_progress .my_navigation ul li .my_prev .svg {
          transform: rotate(180deg);
        }
      `}</style>
    </Fragment>
  );
};

export default Portfolio;
