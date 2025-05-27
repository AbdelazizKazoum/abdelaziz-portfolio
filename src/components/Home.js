import { useState } from "react";
import { HomeModal } from "./ContentModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });

  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };

  return (
    <div className="kura_tm_section" id="home">
      <div className="kura_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">Abdelaziz Kazoum</span>
              <h3 className="job">Full Stack js Developer</h3>

              <div className="services">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/web.jpg",
                          "Full Stack Development"
                        )
                      }
                    >
                      <img
                        className="image"
                        src="/img/service/web.jpg"
                        alt=""
                      />
                      <span>Full Stack Development</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/seo.jpg",
                          "SEO & Web Performance"
                        )
                      }
                    >
                      <img
                        className="image"
                        src="/img/service/seo.jpg"
                        alt=""
                      />
                      <span>SEO & Web Performance</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/devops.jpg",
                          "Deployment & DevOps"
                        )
                      }
                    >
                      <img
                        className="image"
                        src="/img/service/devops.jpg"
                        alt=""
                      />
                      <span>Deployment & DevOps</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/service/design.jpg", "UI/UX Design")
                      }
                    >
                      <img
                        className="image"
                        src="/img/service/design.jpg"
                        alt=""
                      />
                      <span>UI/UX Design</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>4+</h3>
                      <span>
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>50+</h3>
                      <span>
                        Projects
                        <br />
                        Delivered
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right">
              <div className="image">
                <img src="/img/logo/logo.svg" alt="" />
              </div>
            </div>

            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <HomeModal
        open={open}
        onCloseModal={onCloseModal}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
