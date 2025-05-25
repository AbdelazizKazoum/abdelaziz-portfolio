import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="kura_tm_section">
        <div className="kura_tm_copyright">
          <div className="container">
            <div
              className="copyright_inner wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="text">
                <p>
                  Copyright &copy; {new Date().getFullYear()}. All rights
                  reserved.
                </p>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/facebook.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/twitter.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/instagram.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/tik-tok.svg"
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
  );
};

export default Footer;
