import React from "react";
import { MdWeb } from "react-icons/md";
import { FaServer, FaCloud } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

const Price = () => {
  return (
    <>
      <style>{`
        /*---------------------------------------------------*/
        /* 08) KURA PRICING
        /*---------------------------------------------------*/

        .kura_tm_pricing {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 80px 0px 150px 0px; /* Desktop section padding */
          background-color: #f9f9f9;
        }
        .kura_tm_pricing .kura_tm_main_title {
          margin-top: 58px;
        }
        .kura_tm_pricing .pricing_inner {
          width: 100%;
          height: auto;
          clear: both;
          display: flex;
        }
        .kura_tm_pricing .left {
          width: 50%;
          padding-right: 100px;
        }
        .kura_tm_pricing .left .text {
          width: 100%;
          float: left;
          padding-top: 40px;
        }
        .kura_tm_pricing .right {
          width: 50%;
          padding-left: 100px;
        }
        .kura_tm_pricing .right ul {
          margin: 0px;
          list-style-type: none;
          margin-top: 58px;
          padding-left: 0;
        }
        .kura_tm_pricing .right ul li {
          margin: 0px;
          width: 100%;
          float: left;
          margin-bottom: 30px;
        }
        .kura_tm_pricing .right ul li:last-child {
          margin-bottom: 0px;
        }
        .kura_tm_pricing .right ul li .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          display: flex;
          align-items: center;
          padding: 30px 30px 30px 30px; /* Desktop item padding */
          gap: 15px;
          position: relative;
          background-color: #fff;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .kura_tm_pricing .right ul li .list_inner:hover {
          background-color: #ff4522;
        }
        .kura_tm_pricing .right ul li span {
          font-size: 18px;
          color: #000;
          font-family: "Poppins", sans-serif;
          transition: all 0.3s ease;
        }
        .kura_tm_pricing .right ul li .list_inner:hover span {
          color: #fff;
        }
        .kura_tm_pricing .right .title {
          padding-right: 30px;
          flex: 1;
        }
        .kura_tm_pricing .right .cost {
          font-size: 18px; /* Desktop cost font size */
          min-width: 70px;
          text-align: right;
          padding-right: 20px;
          color: #000;
          font-family: "Poppins", sans-serif;
          transition: all 0.3s ease;
          margin-left: auto;
        }
        .kura_tm_pricing .right ul li .list_inner:hover .cost {
          color: #fff;
        }
        .kura_tm_pricing .right ul li svg.icon {
          color: #ff4522;
          min-width: 32px; /* Desktop icon size */
          min-height: 32px; /* Desktop icon size */
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .kura_tm_pricing .right ul li .list_inner:hover svg.icon {
          color: #fff;
        }

        /* Responsive styles */
        /* For Tablets and below */
        @media (max-width: 1040px) {
          .kura_tm_pricing {
            padding: 70px 20px 120px 20px; /* Tablet section padding */
          }
          .kura_tm_pricing .pricing_inner {
            flex-direction: column; /* Ensure stacking, width 100% will also enforce this */
            gap: 40px;
          }
          .kura_tm_pricing .left,
          .kura_tm_pricing .right {
            width: 100%;
          }
          .kura_tm_pricing .left {
            padding-right: 0;
          }
          .kura_tm_pricing .right {
            padding-left: 0;
          }
          .kura_tm_pricing .right ul {
            margin-top: 30px;
          }

          /* Styles for individual pricing items on tablets */
          .kura_tm_pricing .right ul li .list_inner {
            padding: 25px; /* Tablet item padding */
            flex-direction: column; /* Stack icon, title, cost vertically */
            align-items: center; /* Center items */
            gap: 12px; /* Gap between stacked items */
          }
          .kura_tm_pricing .right .title {
            padding-right: 0; /* Remove desktop padding */
            flex: none; /* Reset desktop flex behavior */
            text-align: center; /* Center title text */
          }
          .kura_tm_pricing .right .cost {
            min-width: auto; /* Reset min-width */
            padding-right: 0; /* Remove desktop padding */
            text-align: center; /* Center cost text */
            margin-left: 0; /* Remove desktop margin */
            font-size: 17px; /* Tablet cost font size */
          }
          .kura_tm_pricing .right ul li svg.icon {
            min-width: 30px; /* Tablet icon size */
            min-height: 30px; /* Tablet icon size */
          }
          
          /* Optional: Center the text content in the left column on tablets if desired */
          /*
          .kura_tm_pricing .left .kura_tm_main_title,
          .kura_tm_pricing .left .text {
            text-align: center; 
          }
          */
        }

        /* For Small Mobile phones */
        @media (max-width: 600px) {
          .kura_tm_pricing {
            padding: 40px 10px 80px 10px; /* Mobile section padding */
          }
          .kura_tm_pricing .right ul li .list_inner {
            padding: 20px; /* Mobile item padding */
            gap: 10px; /* Mobile gap between stacked items */
          }
          /* Title styles inherited from 991px (centered, flex:none) */
          .kura_tm_pricing .right .cost {
            font-size: 16px; /* Mobile cost font size */
          }
          .kura_tm_pricing .right ul li svg.icon {
            min-width: 28px; /* Mobile icon size */
            min-height: 28px; /* Mobile icon size */
          }
        }
      `}</style>

      <div className="kura_tm_section" id="price">
        <div className="kura_tm_pricing">
          <div className="container">
            <div className="pricing_inner">
              <div className="left">
                <div className="kura_tm_sticky_section">
                  <div className="kura_tm_main_title">
                    <span>Pricing</span>
                    <h3>Fullstack JavaScript Services</h3>
                  </div>
                  <div className="text">
                    <p>
                      As a seasoned Fullstack JavaScript developer, I deliver
                      modern web applications, APIs, and deployment solutions
                      using the latest technologies like React, Node.js, Docker,
                      and cloud platforms to ensure scalable, maintainable, and
                      high-performing projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="kura_tm_sticky_section">
                  <ul>
                    <li className="wow fadeInUp" data-wow-duration=".7s">
                      <div className="list_inner">
                        <MdWeb className="icon" />{" "}
                        {/* Default size from react-icons will be used unless overridden by specific CSS for svg within .icon if needed */}
                        <div className="title">
                          <span>Fullstack Web Application</span>
                        </div>
                        <div className="cost">
                          <span>$1500</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".2s"
                    >
                      <div className="list_inner">
                        <FaServer className="icon" />
                        <div className="title">
                          <span>API Development (Node.js/Nestjs/Express)</span>
                        </div>
                        <div className="cost">
                          <span>$800</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".4s"
                    >
                      <div className="list_inner">
                        <SiDocker className="icon" />
                        <div className="title">
                          <span>Docker & Deployment Setup</span>
                        </div>
                        <div className="cost">
                          <span>$600</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".6s"
                    >
                      <div className="list_inner">
                        <RiGitRepositoryPrivateLine className="icon" />
                        <div className="title">
                          <span>CI/CD Pipeline Integration</span>
                        </div>
                        <div className="cost">
                          <span>$700</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".8s"
                    >
                      <div className="list_inner">
                        <FaCloud className="icon" />
                        <div className="title">
                          <span>Cloud Deployment & Maintenance</span>
                        </div>
                        <div className="cost">
                          <span>$900</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
