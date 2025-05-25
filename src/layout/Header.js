import React, { Fragment, useEffect, useState } from "react";
import { audioSoundAndOpen, openNav, scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    openNav(!isToggled);
  };

  useEffect(() => {
    audioSoundAndOpen();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
  });

  return (
    <Fragment>
      <div className={"kura_tm_topbar"}>
        <div className="wrapper">
          <div className="topbar_inner">
            <div className="logo">
              <a href="#">
                <img
                  src={dark ? "/img/logo/logo.png" : "/img/logo/dark.png"}
                  alt=""
                />
              </a>
            </div>
            <div className="menu">
              <div className="list">
                <ul className="anchor_nav" id="anchor_nav">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#timeline">Timeline</a>
                  </li>
                  <li>
                    <a href="#price">Price</a>
                  </li>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="trigger" onClick={() => toggleTrueFalse()}>
                <div
                  className={`hamburger hamburger--slider ${
                    isToggled ? " is-active" : ""
                  }`}
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kura_tm_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#">
                <img
                  src={dark ? "/img/logo/logo.png" : "/img/logo/dark.png"}
                  alt=""
                />
              </a>
            </div>
            <div className="trigger" onClick={toggleTrueFalse}>
              <div
                className={
                  isToggled
                    ? "hamburger hamburger--slider is-active"
                    : "hamburger hamburger--slider"
                }
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isToggled ? "dropdown active" : "dropdown"}>
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
              <li>
                <a href="#price">Price</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
