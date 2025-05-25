import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(import("./Parallax"), {
  ssr: false,
});

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
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
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value="95">
                  <span>
                    <span className="label">HTML &amp; CSS</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="80">
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">WordPress</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <ParallaxVideo />
              <div
                className="my_image jarallax"
                data-speed="0"
                style={{
                  backgroundImage: "url(/img/portfolio/2.jpg)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
