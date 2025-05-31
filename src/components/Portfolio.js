import { Fragment, useState } from "react";
import ProjectModal from "./modals/ProjectModal";

const projects = [
  {
    title: "Irecrutement",
    description:
      "A full-featured recruitment platform for public organizations. It streamlines the entire hiring process — from job seekers submitting personal and professional details, CVs, diplomas, etc., to a powerful back-office interface for admins to filter and manage candidates efficiently.",
    techStack: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Tailwind CSS",
      "ShadCN",
      "NextAuth",
      "JWT",
      "Passport.js",
      "CASL",
      "JSON-to-Form",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
    ],
    images: [
      "/img/portfolio/recrutement/irecrutement_1.png",
      "/img/portfolio/recrutement/irecrutement_2.png",
      "/img/portfolio/recrutement/irecrutement_3.png",
      "/img/portfolio/recrutement/irecrutement_4.png",
    ],
  },
  {
    title: "MyGlass",
    description:
      "An eCommerce platform for a glass store, built with a custom back-office. Clients can browse, create accounts, and purchase products. The admin can fully manage users, products, categories, orders, and inventory.",
    techStack: ["React", "NestJS", "Tailwind CSS", "MySQL"],
    images: [
      "/img/portfolio/myglass/myglass_1.png",
      "/img/portfolio/myglass/myglass_2.png",
      "/img/portfolio/myglass/myglass_3.png",
      "/img/portfolio/myglass/myglass_4.png",
    ],
  },
  {
    title: "Leo Dandora",
    description: "A personal portfolio website with animations.",
    techStack: ["React", "Framer Motion", "Vercel"],
    images: ["/img/portfolio/5.jpg", "/img/portfolio/6.jpg"],
  },
  {
    title: "Dashboard X",
    description: "Admin dashboard with dark/light mode.",
    techStack: ["Vue", "Chart.js", "Tailwind"],
    images: ["/img/portfolio/7.jpg"],
  },
  {
    title: "Code Snippet",
    description: "A snippet sharing tool for developers.",
    techStack: ["Next.js", "Zod", "Prisma"],
    images: ["/img/portfolio/8.jpg"],
  },
  {
    title: "BlogCraft",
    description: "Markdown-powered blogging engine.",
    techStack: ["React", "Next.js", "MDX"],
    images: ["/img/portfolio/9.jpg"],
  },
];

const ITEMS_PER_PAGE = 3;

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <Fragment>
      <div className="kura_tm_section" id="portfolio">
        <div className="kura_tm_portfolio">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Portfolio</span>
              <h3>Selected Works</h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <div className="grid-container">
                {visibleProjects.map((project, index) => (
                  <div className="list_inner" key={index}>
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
                ))}
              </div>

              {/* Navigation */}
              <div className="kura_tm_swiper_progress fill">
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" onClick={handlePrev}>
                        <img
                          className="svg"
                          src="img/svg/right-arrow.svg"
                          alt="Prev"
                        />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" onClick={handleNext}>
                        <img
                          className="svg"
                          src="img/svg/right-arrow.svg"
                          alt="Next"
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

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style jsx global>{`
        .kura_tm_portfolio .kura_tm_main_title {
          width: 100%;
          clear: both;
          float: left;
        }

        .kura_tm_portfolio .kura_tm_main_title span {
          display: inline-block;
          margin-bottom: 10px;
          color: #ff4522;
          font-family: "Poppins";
          font-weight: 500;
        }

        .kura_tm_portfolio .kura_tm_main_title h3 {
          font-weight: 800;
          text-transform: uppercase;
        }

        .kura_tm_portfolio .kura_tm_portfolio {
          width: 100%;
          float: left;
          padding: 140px 0 138px;
        }

        .kura_tm_portfolio .portfolio_list {
          padding-top: 92px;
        }

        .kura_tm_portfolio .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 1024px) {
          .kura_tm_portfolio .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .kura_tm_portfolio .grid-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .kura_tm_portfolio .portfolio_list .list_inner {
          border: 2px solid #ebebeb;
          border-radius: 15px;
          overflow: hidden;
          padding: 5px;
          position: relative;
        }

        .kura_tm_portfolio .image {
          position: relative;
          cursor: pointer;
          width: 100%;
          aspect-ratio: 1240 / 924;
          max-width: 100%;
        }

        .kura_tm_portfolio .image img {
          opacity: 0;
          width: 100%;
          height: 100%;
        }

        .kura_tm_portfolio .main {
          position: absolute;
          inset: 0;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-radius: 10px;
        }

        .kura_tm_portfolio .overlay {
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

        .kura_tm_portfolio .list_inner:hover .overlay {
          opacity: 1;
          visibility: visible;
        }

        .kura_tm_portfolio .details {
          position: absolute;
          z-index: 2;
          bottom: 41px;
          left: 49px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .kura_tm_portfolio .list_inner:hover .details {
          opacity: 1;
          visibility: visible;
        }

        .kura_tm_portfolio .details h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .kura_tm_portfolio .details span {
          font-family: "Poppins";
        }

        .kura_tm_portfolio .tech-stack {
          margin-top: 10px;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .kura_tm_portfolio .tech-stack li {
          background-color: #ff4522;
          color: white;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 5px;
          font-family: "Poppins", sans-serif;
        }

        .kura_tm_portfolio .image .svg {
          position: absolute;
          top: 40px;
          right: -120px;
          width: 50px;
          height: 50px;
          z-index: 2;
          transform: rotate(-50deg);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .kura_tm_portfolio .list_inner:hover .image .svg {
          opacity: 1;
          visibility: visible;
        }

        .kura_tm_portfolio .kura_tm_full_link {
          position: absolute;
          inset: 0;
          z-index: 5;
        }

        .kura_tm_portfolio .kura_tm_swiper_progress {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 27px;
        }

        .kura_tm_portfolio .kura_tm_swiper_progress .my_navigation ul {
          margin: 0;
          list-style: none;
          display: flex;
          gap: 10px;
        }

        .kura_tm_portfolio .kura_tm_swiper_progress .my_navigation ul li a {
          display: block;
          cursor: pointer;
          color: #000;
          transition: all 0.3s ease;
        }

        .kura_tm_portfolio
          .kura_tm_swiper_progress
          .my_navigation
          ul
          li
          a:hover {
          color: #ff4522;
        }

        .kura_tm_portfolio .kura_tm_swiper_progress .svg {
          width: 27px;
          height: 27px;
        }

        .kura_tm_portfolio .my_prev .svg {
          transform: rotate(180deg);
        }
      `}</style>
    </Fragment>
  );
};

export default Portfolio;
