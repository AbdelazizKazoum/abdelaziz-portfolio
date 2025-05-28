import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(() => import("./Parallax"), { ssr: false });

const skillsData = [
  { name: "React", percent: 90, icon: "devicon-react-original colored" },
  { name: "Next.js", percent: 85, icon: "devicon-nextjs-original colored" },
  { name: "NextAuth.js", percent: 80, icon: "custom" },
  { name: "Vue.js", percent: 75, icon: "devicon-vuejs-plain colored" },
  { name: "NestJS", percent: 85, icon: "devicon-nestjs-plain colored" },
  { name: "Node.js", percent: 90, icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", percent: 85, icon: "devicon-express-original colored" },
  { name: "SQL", percent: 80, icon: "devicon-mysql-plain colored" },
  { name: "NoSQL", percent: 85, icon: "devicon-mongodb-plain colored" },
  { name: "Docker", percent: 80, icon: "devicon-docker-plain colored" },
  { name: "Nginx", percent: 75, icon: "devicon-nginx-original colored" },
  { name: "Bootstrap", percent: 85, icon: "devicon-bootstrap-plain colored" },
  {
    name: "Tailwind CSS",
    percent: 90,
    icon: "devicon-tailwindcss-plain colored",
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
            <div className="">
              <div className="kura_tm_main_title light">
                <span>Skills</span>
                <h3>Programming Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                  For more than 20 years our experts have been accomplishing
                  enough with modern Web Development, new generation web and app
                  programming language.
                </p>
              </div>

              <div
                className="skills_grid wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
                style={{
                  display: "grid",
                  gap: "20px",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  marginTop: "40px",
                }}
              >
                {skillsData.map((skill, i) => (
                  <div
                    key={i}
                    className="skill_card"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                      padding: "20px",
                      textAlign: "center",
                      color: "#fff",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {skill.icon === "custom" ? (
                      <img
                        src="/img/icons/nextauth.svg"
                        alt={skill.name}
                        style={{ width: "30px", margin: "0 auto 10px" }}
                      />
                    ) : (
                      <i
                        className={skill.icon}
                        style={{ fontSize: "30px", marginBottom: "10px" }}
                      ></i>
                    )}
                    <h4 style={{ margin: "10px 0 5px" }}>{skill.name}</h4>
                    <div style={{ fontSize: "14px", color: "#bbb" }}>
                      {skill.percent}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded styles (scoped via styled-jsx) */}
      <style jsx>{`
        .kura_tm_skills {
          width: 100%;
          height: auto;
          position: relative;
          padding: 140px 0 150px;
          background: url("/img/patterns/white-texture.png") repeat;
          background-size: cover;
        }
        .kura_tm_skills::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("/img/patterns/white-texture.png") repeat;
          opacity: 0.6;
          z-index: 2;
        }
        .kura_tm_skills::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #000;
          z-index: 1;
        }
        .skills_inner {
          position: relative;
          z-index: 3;
        }
        .left {
          width: 60%;
          padding-right: 200px;
        }
        .kura_tm_main_title.light h3 {
          color: #fff;
        }
        .text p {
          color: #bbb;
        }

        /* Add animation for progress if needed */
        @keyframes wow {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
