import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../swiperSliderProps";
import { NewsModal } from "./ContentModal";

const News = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
  });
  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({ img, title, date });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "" });
  };

  return (
    <Fragment>
      <style jsx>{`
        /*---------------------------------------------------*/
        /* 09) KURA NEWS
        /*---------------------------------------------------*/
        .kura_tm_news {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 140px 0px 140px 0px;
        }
        .kura_tm_news .news_list {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding-top: 92px;
        }
        .kura_tm_news .news_list .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }
        .kura_tm_news .news_list .image {
          position: relative;
        }
        .kura_tm_news .news_list .image img {
          position: relative;
          min-width: 100%;
          opacity: 0;
        }
        .kura_tm_news .news_list .image .main {
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-radius: 10px;
        }
        .kura_tm_news .news_list .overlay {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 10px;
          right: 10px;
          background-color: #fff;
          border-radius: 10px;
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        .kura_tm_news .news_list .list_inner:hover .overlay {
          opacity: 1;
          visibility: visible;
        }
        .kura_tm_news .news_list .details {
          position: absolute;
          z-index: 2;
          bottom: 0px;
          left: 0px;
          padding: 0px 40px 45px 49px;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        .kura_tm_news .news_list .list_inner:hover .details {
          opacity: 1;
          visibility: visible;
        }
        .kura_tm_news .news_list .details h3 {
          font-size: 20px;
          font-weight: 700;
        }
        .kura_tm_news .news_list .details span {
          font-family: "Poppins";
          margin-bottom: 6px;
          display: inline-block;
        }
        .kura_tm_news .news_list .list_inner .svg {
          position: absolute;
          top: 40px;
          right: 39px;
          width: 50px;
          height: 50px;
          z-index: 2;
          transform: rotate(-50deg);
          color: #000;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        .kura_tm_news .news_list .list_inner:hover .svg {
          opacity: 1;
          visibility: visible;
        }
        .kura_tm_news .news_hidden_details {
          display: none;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          z-index: -11;
        }
        .kura_tm_modalbox .news_popup_informations {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }
        .kura_tm_modalbox .news_popup_informations .image {
          position: relative;
          margin-bottom: 37px;
        }
        .kura_tm_modalbox .news_popup_informations .image img {
          position: relative;
          opacity: 0;
          min-width: 100%;
        }
        .kura_tm_modalbox .news_popup_informations .image .main {
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
        }
        .kura_tm_modalbox .news_popup_informations .details {
          width: 100%;
          float: left;
          margin-bottom: 20px;
        }
        .kura_tm_modalbox .news_popup_informations .details span {
          display: inline-block;
          margin-bottom: 7px;
        }
        .kura_tm_modalbox .news_popup_informations .details h3 {
          font-size: 22px;
        }
        .kura_tm_modalbox .news_popup_informations .text {
          width: 100%;
          float: left;
        }
        .kura_tm_modalbox .news_popup_informations .text p {
          margin-bottom: 15px;
        }
        .kura_tm_modalbox .news_popup_informations .text p:last-child {
          margin-bottom: 0px;
        }
      `}</style>

      <div className="kura_tm_section" id="news">
        <div className="kura_tm_news">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>September 02, 2021</span>
                          <h3>VS Code Gets New JavaScript Debugger</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/1.jpg`,
                              "VS Code Gets New JavaScript Debugger",
                              "September 02, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Kura, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/2.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>August 17, 2021</span>
                          <h3>Javalin Framework for Kotlin and Java Updated</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/2.jpg`,
                              "Javalin Framework for Kotlin and Java Updated",
                              "August 17, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Kura, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/3.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>July 05, 2021</span>
                          <h3>JavaScript Dominated Open Source in 2021</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/3.jpg`,
                              "JavaScript Dominated Open Source in 2021",
                              "July 05, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Kura, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/4.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>April 22, 2021</span>
                          <h3>Perfecto Tests Progressive Web Apps</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/4.jpg`,
                              "Perfecto Tests Progressive Web Apps",
                              "April 22, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Kura, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
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
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        date={modalValue.date}
      />
    </Fragment>
  );
};

export default News;
