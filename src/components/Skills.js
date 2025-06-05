import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(() => import("./Parallax"), { ssr: false });

const skillsData = [
  { name: "React", percent: 90, icon: "devicon-react-original colored" },
  { name: "Next.js", percent: 85, icon: "devicon-nextjs-original colored" },
  { name: "Vue.js", percent: 75, icon: "devicon-vuejs-plain colored" },
  { name: "NestJS", percent: 85, icon: "devicon-nestjs-plain colored" },
  { name: "Node.js", percent: 90, icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", percent: 85, icon: "devicon-express-original colored" },
  { name: "SQL", percent: 80, icon: "devicon-mysql-plain colored" },
  { name: "NoSQL", percent: 85, icon: "devicon-mongodb-plain colored" },
  { name: "Docker", percent: 80, icon: "devicon-docker-plain colored" },
  // { name: "Nginx", percent: 75, icon: "devicon-nginx-original colored" },
  { name: "Bootstrap", percent: 85, icon: "devicon-bootstrap-plain colored" },
  {
    name: "Tailwind CSS",
    percent: 90,
    icon: "devicon-tailwindcss-plain colored",
  },
  { name: "Git", percent: 90, icon: "devicon-git-plain colored" },
  { name: "GraphQL", percent: 80, icon: "devicon-graphql-plain colored" },
  { name: "Redux", percent: 85, icon: "devicon-redux-original colored" },
  {
    name: "AWS",
    percent: 70,
    icon: "devicon-amazonwebservices-original colored",
  },
];

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div>
              <div
                style={{ marginBottom: "40px" }}
                className="kura_tm_main_title light"
              >
                <span>Skills</span>
                <h3>Tech Stack & Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                  With over 4 years of experience in full-stack development,
                  I've built and maintained robust web applications using modern
                  technologies across the frontend and backend. I’m continuously
                  learning and refining my skills to deliver high-quality,
                  scalable solutions.
                </p>
              </div>

              <div
                className="skills_grid wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                {skillsData.map((skill, i) => (
                  <div key={i} className="skill_card">
                    {skill.icon === "custom" ? (
                      <img
                        src="/img/icons/nextauth.svg"
                        alt={skill.name}
                        className="skill_icon"
                      />
                    ) : (
                      <i className={`${skill.icon} skill_icon`}></i>
                    )}
                    <h4 className="skill_title">{skill.name}</h4>
                    <div className="skill_percent">{skill.percent}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .kura_tm_skills {
          width: 100%;
          padding: 140px 0 150px;
          position: relative;
          background: url("/img/patterns/white-texture.png") repeat;
          background-size: cover;
        }

        .kura_tm_skills::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: url("/img/patterns/white-texture.png") repeat;
          opacity: 0.4;
          z-index: 2;
        }

        .kura_tm_skills::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #000;
          z-index: 1;
        }

        .skills_inner {
          position: relative;
          z-index: 3;
        }

        .kura_tm_main_title.light h3 {
          color: white;
        }

        .text p {
          color: #bbb;
        }

        .skills_grid {
          display: grid;
          gap: 30px;
          grid-template-columns: repeat(2, 1fr); /* mobile default: 2 columns */
          margin-top: 40px;
        }

        @media (min-width: 768px) {
          .skills_grid {
            grid-template-columns: repeat(3, 1fr); /* tablets */
          }
        }

        @media (min-width: 1024px) {
          .skills_grid {
            grid-template-columns: repeat(5, 1fr); /* large screens */
          }
        }

        .skill_card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          color: #fff;
          backdrop-filter: blur(4px);
          transition: transform 0.3s ease;
        }

        .skill_card:hover {
          transform: translateY(-5px);
        }

        .skill_icon {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .skill_title {
          font-size: 14px; /* Smaller title */
          margin: 10px 0 5px;
          color: white;
        }

        .skill_percent {
          font-size: 14px;
          color: #00ff80;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Skills;
