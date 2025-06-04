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
    content: "",
  });

  // News data array with real JavaScript stack development news
  const newsData = [
    {
      id: 1,
      title: "React 19 Beta Introduces Revolutionary Features",
      date: "April 25, 2024",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*1MXmdOFe029RT-MmtmzfAw.jpeg",
      content: `React 19 Beta brings groundbreaking features including Actions for handling data mutations and state updates, significant improvements in server-side rendering performance, and enhanced developer experience. The new Actions API simplifies form handling and async operations, while concurrent features provide smoother user interactions.

This major update represents a significant leap forward in React's evolution, with improved TypeScript support and better integration with modern web standards. The React team has focused on performance optimizations that make applications faster and more responsive.

Developers can expect enhanced debugging capabilities, better error boundaries, and streamlined state management patterns that reduce boilerplate code while maintaining the flexibility React is known for.`,
    },
    {
      id: 2,
      title: "Next.js 15 Launches with Turbopack Performance Boost",
      date: "October 21, 2024",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*O0Wodmsm5OkcO2pwy2LDrg@2x.jpeg",
      content: `Next.js 15 delivers unprecedented performance improvements with Turbopack integration, featuring up to 76.7% faster local server startup and 96.3% faster code updates with Fast Refresh. The new Static Route Indicator provides better visibility into application routing behavior.

The release includes significant enhancements to the App Router, improved TypeScript support, and better integration with React Server Components. Developers can now enjoy faster builds and more efficient development workflows.

Key improvements include enhanced error handling, better debugging tools, and streamlined deployment processes that make scaling Next.js applications more manageable for teams of all sizes.`,
    },
    {
      id: 3,
      title: "JavaScript Tooling Evolution Continues in 2024",
      date: "December 27, 2024",
      image:
        "https://d2ms8rpfqc4h24.cloudfront.net/top_javascript_development_tools_bb7222ea32.jpg",
      content: `The JavaScript ecosystem saw remarkable growth in 2024, with significant advances in build tools, testing frameworks, and development environments. New tooling focuses on performance, developer experience, and interoperability between different frameworks and libraries.

Major improvements include faster bundlers, more intelligent code splitting, and enhanced support for modern JavaScript features. The community has embraced TypeScript adoption and improved tooling for both frontend and backend development.

Notable trends include the rise of native ESM support, improved debugging capabilities, and better integration between different parts of the JavaScript stack, making full-stack development more cohesive and efficient.`,
    },
    {
      id: 4,
      title: "React Server Components Become Ecosystem Standard",
      date: "January 15, 2025",
      image:
        "https://via.placeholder.com/709x709/20232A/61DAFB?text=React+Server+Components",
      content: `React Server Components are becoming the standard primitive across the React ecosystem, with React Router and TanStack Start adopting RSC in their upcoming releases. This shift represents a fundamental change in how React applications handle server-side rendering and data fetching.

The adoption of RSC enables better performance through reduced JavaScript bundle sizes, improved SEO capabilities, and more efficient data loading patterns. Developers can now build more performant applications with less client-side JavaScript.

This evolution simplifies the development process while providing better user experiences, particularly for content-heavy applications that benefit from server-side rendering and progressive enhancement strategies.`,
    },
    {
      id: 5,
      title: "TypeScript 5.7 Enhances Developer Experience",
      date: "November 20, 2024",
      image:
        "https://via.placeholder.com/709x709/3178C6/FFFFFF?text=TypeScript+5.7",
      content: `TypeScript 5.7 introduces powerful new features that enhance type safety and developer productivity. The release includes improved inference algorithms, better support for modern JavaScript patterns, and enhanced integration with popular frameworks.

Key improvements include more accurate type checking, better performance for large codebases, and enhanced support for decorators and other advanced language features. The compiler now provides more helpful error messages and suggestions.

These enhancements make TypeScript even more appealing for large-scale applications, with better tooling support in popular editors and improved integration with build systems and testing frameworks.`,
    },
    {
      id: 6,
      title: "Node.js Security and Performance Updates",
      date: "March 12, 2024",
      image:
        "https://via.placeholder.com/709x709/339933/FFFFFF?text=Node.js+Updates",
      content: `Node.js continues to evolve with significant security enhancements and performance optimizations. Recent updates focus on improving runtime security, reducing memory footprint, and enhancing compatibility with modern JavaScript features.

The latest versions include better support for ESM modules, improved V8 integration, and enhanced debugging capabilities. Security patches address critical vulnerabilities while maintaining backward compatibility.

Performance improvements include faster startup times, reduced memory usage, and better handling of concurrent operations, making Node.js applications more efficient and scalable for production environments.`,
    },
  ];

  const onOpenModal = (newsItem) => {
    setOpen(true);
    setModalValue({
      img: newsItem.image,
      title: newsItem.title,
      date: newsItem.date,
      content: newsItem.content,
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "", content: "" });
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
              <h3>Latest JavaScript Development News</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    {newsData.map((newsItem) => (
                      <SwiperSlide key={newsItem.id} className="slick-slide">
                        <div className="list_inner">
                          <div className="image">
                            <img src="/img/portfolio/410-460.jpg" alt="" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${newsItem.image})`,
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
                            <span>{newsItem.date}</span>
                            <h3>{newsItem.title}</h3>
                          </div>
                          <a
                            className="kura_tm_full_link"
                            onClick={() => onOpenModal(newsItem)}
                          ></a>
                          <div className="news_hidden_details">
                            <div className="news_popup_informations">
                              <div className="text">
                                {newsItem.content
                                  .split("\n\n")
                                  .map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                  ))}
                              </div>
                            </div>
                          </div>
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
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        date={modalValue.date}
        desc={modalValue.content}
      />
    </Fragment>
  );
};

export default News;
