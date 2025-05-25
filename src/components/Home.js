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
              <span className="name">Bernard Smith</span>
              <h3 className="job">Creative Designer based in Japan</h3>
              <div className="services">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/1.jpg",
                          "Creative Designer based in Japan"
                        )
                      }
                    >
                      <img className="image" src="/img/service/1.jpg" alt="" />
                      <span>Web Development</span>
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
                        onOpenModal("/img/service/2.jpg", "Digital Marketing")
                      }
                    >
                      <img className="image" src="/img/service/2.jpg" alt="" />
                      <span>Digital Marketing</span>
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
                        onOpenModal("/img/service/1.jpg", "Graphic Design")
                      }
                    >
                      <img className="image" src="/img/service/3.jpg" alt="" />
                      <span>Graphic Design</span>
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
                      <h3>10+</h3>
                      <span>
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>3K+</h3>
                      <span>
                        Happy
                        <br />
                        Customers
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: "url(img/hero/1.jpg)" }}
                ></div>
                <div className="shape"></div>
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
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
