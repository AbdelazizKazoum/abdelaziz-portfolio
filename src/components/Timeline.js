import React from "react";

const Timeline = () => {
  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>My Journey</h3>
          </div>
          <div className="timeline_list">
            <ul>
              {/* Ongoing Experiences and Education */}
              <li className="wow fadeInUp" data-wow-duration=".7s">
                <div className="list_inner">
                  <span>2021 - Present</span>
                </div>
                <div className="list_inner">
                  <span>Software Engineer – Full Stack JS Developer</span>
                </div>
                <div className="list_inner">
                  <span>Public Organization, Rabat</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>2021 - Present</span>
                </div>
                <div className="list_inner">
                  <span>Freelance Full Stack JavaScript Developer</span>
                </div>
                <div className="list_inner">
                  <span>Remote / Personal Projects</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner">
                  <span>2025 - Present</span>
                </div>
                <div className="list_inner">
                  <span>
                    Engineering Degree in Computer Systems Engineering
                  </span>
                </div>
                <div className="list_inner">
                  <span>SUPMTI, Morocco</span>
                </div>
              </li>

              {/* Past Education */}
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner">
                  <span>2021 - 2024</span>
                </div>
                <div className="list_inner">
                  <span>Bachelor’s Degree in Computer Systems Engineering</span>
                </div>
                <div className="list_inner">
                  <span>SUPMTI, Morocco</span>
                </div>
              </li>

              {/* Past Experience */}
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay="1s"
              >
                <div className="list_inner">
                  <span>2020 - 2021</span>
                </div>
                <div className="list_inner">
                  <span>Database Administrator (Oracle & SQL Server)</span>
                </div>
                <div className="list_inner">
                  <span>Public Organization, Rabat</span>
                </div>
              </li>

              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner">
                  <span>2018 - 2020</span>
                </div>
                <div className="list_inner">
                  <span>
                    Diploma: Technicien Spécialisé en Développement Informatique
                  </span>
                </div>
                <div className="list_inner">
                  <span>ISTA Mirleft</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
