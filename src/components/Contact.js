import React from "react";

const Contact = () => {
  return (
    <>
      <style>{`
        /*---------------------------------------------------*/
        /* KURA CONTACT General Styles                     */
        /*---------------------------------------------------*/

        .kura_tm_contact {
          width: 100%;
          height: auto;
          clear: both; /* Keep clear if sections above might float */
          background-color: #f9f9f9;
          padding: 140px 0px 119px 0px;
        }
        .kura_tm_contact .contact_inner {
          width: 100%;
          height: auto;
          clear: both;
          display: flex;
          margin-top: 40px;
        }
        .kura_tm_contact .left {
          width: 50%;
          padding-right: 100px;
        }
        .kura_tm_contact .left .text {
          width: 100%;
          margin-bottom: 42px;
          padding-top: 40px;
        }
        .kura_tm_contact .short {
          width: 100%;
        }
        .kura_tm_contact .short ul {
          margin: 0px;
          list-style-type: none;
        }
        .kura_tm_contact .short ul li {
          margin: 0px 0px 23px 0px;
          width: 100%;
        }
        .kura_tm_contact .short ul li .list_inner {
          width: 100%;
          height: auto;
          clear: both; /* May not be needed with flex */
          position: relative; /* Keep for absolute positioning of icon on desktop */
          padding-left: 35px; /* Space for the icon */
        }
        .kura_tm_contact .short ul li .list_inner .svg.contact-icon {
          position: absolute;
          left: 0px;
          width: 18px;
          height: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #ff4522;
        }
        .kura_tm_contact .short ul li .list_inner span.contact-text { /* Target the span more specifically */
          font-size: 18px;
          color: #000;
          font-family: "Poppins", sans-serif;
          line-height: 1.6; /* Improve readability */
        }
        .kura_tm_contact .right {
          width: 50%;
          padding-left: 100px;
        }
        .kura_tm_contact .fields {
          width: 100%;
          height: auto;
          clear: both;
        }
        .kura_tm_contact .fields .first {
          width: 100%;
        }
        .kura_tm_contact .fields ul {
          margin: 0px;
          list-style-type: none;
        }
        .kura_tm_contact .fields ul li {
          width: 100%;
          margin: 0px 0px 30px 0px;
        }
        .kura_tm_contact .fields ul li input {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: transparent;
          padding: 12px 15px; /* Adjusted padding */
          font-family: "Poppins", sans-serif;
          font-size: 16px;
        }
        .kura_tm_contact .fields ul li input:focus {
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }
        .kura_tm_contact .fields .last textarea {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          height: 120px;
          resize: vertical;
          margin-bottom: 20px;
          background-color: transparent;
          padding: 12px 15px; /* Adjusted padding */
          font-family: "Poppins", sans-serif;
          font-size: 16px;
        }
        .kura_tm_contact .fields .last textarea:focus {
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }
        .kura_tm_contact .empty_notice {
          color: #f52225;
          margin-bottom: 7px;
          display: none;
          text-align: left;
          font-weight: 500;
        }
        .kura_tm_contact .returnmessage {
          color: #28a745; /* Changed to green for success */
          margin-bottom: 7px;
          text-align: left;
          font-weight: 500;
        }

        /* --- Button Styles --- */
        .kura_tm_button {
          width: 100%;
          height: auto;
          clear: both;
        }

        .kura_tm_button button#send_message {
          font-family: "Poppins", sans-serif;
          color: #fff;
          font-size: 17px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px 25px; /* Adjusted padding */
          position: relative;
          background-color: #ff4522;
          border: none;
          cursor: pointer;
          width: auto;

          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }

        .kura_tm_button button#send_message .svg { /* This is the image/icon inside the button */
          position: relative;
          /* top: 1px; remove if align-items center works well */
          width: 17px;  /* Desktop size */
          height: 17px; /* Desktop size */
          margin-left: 10px;

          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }

        .kura_tm_button button#send_message:hover {
          color: #fff;
          background-color: #000;
        }

        .kura_tm_button button#send_message:hover .svg {
          transform: translateX(5px);
        }


        /* --- Responsive Adjustments --- */
        /* For Small Desktops and Large Landscape Tablets */
        @media (max-width: 1040px) {
            .kura_tm_contact .left {
                padding-right: 40px;
            }
            .kura_tm_contact .right {
                padding-left: 40px;
            }
        }

        /* For Tablets (Portrait & Smaller Landscape) and Mobile Phones */
        @media (max-width: 1040px) { /* Changed from 767px to 991px */
          .kura_tm_contact {
            padding: 100px 20px 80px 20px; /* Added horizontal padding to the section */
          }
          .kura_tm_contact .contact_inner {
            flex-direction: column;
            margin-top: 20px;
          }
          .kura_tm_contact .left {
            width: 100%;
            padding-right: 0; /* Remove side padding, section has it now */
            padding-left: 0;
            margin-bottom: 40px;
          }
          .kura_tm_contact .right {
            width: 100%;
            padding-left: 0; /* Remove side padding, section has it now */
            padding-right: 0;
          }

          /* --- Contact List Item Fix for Stacked Layout --- */
          .kura_tm_contact .short ul li .list_inner {
            display: flex; /* Use flexbox for alignment */
            align-items: flex-start; /* Align items to the top */
            padding-left: 0; /* Remove padding, flex will handle spacing */
            position: static; /* Override desktop absolute positioning context if any was implied */
          }
          .kura_tm_contact .short ul li .list_inner .svg.contact-icon {
            position: static; /* Not absolutely positioned */
            transform: none;   /* Reset transform */
            margin-right: 12px; /* Space between icon and text */
            margin-top: 3px; /* Adjust top margin for better alignment with text line */
            flex-shrink: 0; /* Prevent icon from shrinking */
            width: 18px; /* Consistent width */
            height: 18px; /* Consistent height */
          }
          .kura_tm_contact .short ul li .list_inner span.contact-text {
            font-size: 16px;
            text-align: left; /* Ensure text is left-aligned */
            flex-grow: 1; /* Allow text to take remaining space */
          }
          /* --- End Contact List Item Fix --- */

          .kura_tm_contact .fields ul li input,
          .kura_tm_contact .fields .last textarea {
            font-size: 15px;
            padding: 10px 12px; /* Slightly adjust padding for smaller screens */
          }
          .kura_tm_button button#send_message {
            width: 100%; /* Make button full-width */
            padding: 12px 20px;
            font-size: 16px; /* Slightly smaller font on mobile button */
          }
          
          .kura_tm_button button#send_message .svg {
            width: 14px;  /* Smaller icon in button for mobile */
            height: 14px !important; /* Smaller icon in button for mobile */
            margin-left: 8px; /* Optionally reduce margin if icon is smaller */
          }
        }
      `}</style>
      <div className="kura_tm_section" id="contact">
        <div className="kura_tm_contact">
          <div className="container">
            {" "}
            {/* Assuming .container handles max-width and centering */}
            <div className="kura_tm_main_title">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
            <div className="contact_inner">
              <div className="left wow fadeInUp" data-wow-duration=".7s">
                <div style={{ textAlign: "left" }} className="text">
                  <p>
                    I’m always open to discussing new projects, collaborations,
                    or opportunities. Feel free to reach out to me directly via
                    phone, email, or through the contact form. I strive to
                    respond promptly during business hours.
                  </p>
                </div>
                <div className="short">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          className="svg replaced-svg contact-icon"
                        >
                          <g>
                            <g>
                              <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z"></path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z"></path>
                            </g>
                          </g>
                        </svg>
                        <span className="contact-text">
                          Rabat, Salé, Sale El Jadida, Morocco
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Capa_2"
                          x="0px"
                          y="0px"
                          viewBox="0 0 473.806 473.806"
                          style={{
                            enableBackground: "new 0 0 473.806 473.806",
                          }}
                          className="svg replaced-svg contact-icon"
                        >
                          <g>
                            <g>
                              <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path>
                              <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path>
                              <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path>
                            </g>
                          </g>
                        </svg>
                        <span className="contact-text">
                          <a
                            href="tel:+212636739071"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            +212 636 739 071
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Capa_3"
                          enableBackground="new 0 0 479.058 479.058"
                          height="512"
                          viewBox="0 0 479.058 479.058"
                          width="512"
                          className="svg replaced-svg contact-icon"
                        >
                          <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"></path>
                        </svg>
                        <span className="contact-text">
                          <a
                            href="mailto:abdelazizkazoum1@gmail.com"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            abdelazizkazoum1@gmail.com
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Capa_4"
                          x="0px"
                          y="0px"
                          viewBox="0 0 479.447 479.447"
                          style={{
                            enableBackground: "new 0 0 479.447 479.447",
                          }}
                          className="svg replaced-svg contact-icon"
                        >
                          <g>
                            <g>
                              <path d="M239.446,0.022c-8.594,0-17.182,0.462-25.727,1.383c-7.832,0.8-15.568,2.112-23.2,3.704 c-1.477,0.309-2.955,0.635-4.432,0.976C141.12,16.323,100.06,39.314,67.831,72.301c-2.997,3.072-5.931,6.235-8.8,9.488 c-87.06,99.948-76.612,251.548,23.337,338.608c95.688,83.349,239.723,77.803,328.719-12.656c3.003-3.072,5.936-6.235,8.8-9.488 c38.421-43.754,59.594-100.003,59.56-158.232C479.447,107.472,371.995,0.021,239.446,0.022z M78.495,84.301 c1.264-1.312,2.576-2.568,3.864-3.84c1.488-1.464,2.968-2.936,4.488-4.352c1.336-1.248,2.712-2.448,4.08-3.664 c1.544-1.368,3.08-2.736,4.664-4.056c1.392-1.176,2.824-2.304,4.248-3.44c1.6-1.28,3.2-2.56,4.848-3.792 c1.456-1.096,2.936-2.16,4.424-3.2c1.656-1.184,3.32-2.4,5.008-3.504c1.512-1.024,3.04-2.016,4.576-3 c1.712-1.096,3.432-2.176,5.168-3.2c1.563-0.933,3.136-1.851,4.72-2.752c1.771-1.008,3.549-1.992,5.336-2.952 c1.6-0.853,3.2-1.688,4.8-2.504c1.824-0.92,3.664-1.808,5.512-2.68c1.6-0.76,3.264-1.52,4.912-2.24c1.88-0.8,3.784-1.6,5.688-2.4 c1.656-0.68,3.304-1.344,4.976-1.984c1.936-0.736,3.896-1.424,5.856-2.112c1.672-0.584,3.344-1.168,5.04-1.72 c1.992-0.64,4-1.232,6.016-1.816c1.688-0.488,3.36-0.992,5.056-1.448c0.648-0.168,1.296-0.304,1.944-0.472 c-23.68,22.993-41.253,51.529-51.128,83.024c-18.988-5.008-37.37-12.082-54.816-21.096C78.039,84.821,78.263,84.541,78.495,84.301 z M66.991,97.181c19.217,10.412,39.595,18.522,60.712,24.16c-10.352,35.996-15.786,73.227-16.152,110.68h-95.92 C17.374,182.632,35.435,135.214,66.991,97.181z M66.991,382.861c-31.554-38.034-49.615-85.452-51.36-134.84h95.92 c0.366,37.453,5.799,74.684,16.152,110.68C106.587,364.341,86.209,372.45,66.991,382.861z M181.727,456.429 c-1.616-0.408-3.288-0.936-4.952-1.424c-2.024-0.592-4.056-1.184-6.056-1.832c-1.688-0.544-3.352-1.128-5.016-1.712 c-1.968-0.68-3.936-1.376-5.88-2.12c-1.664-0.632-3.304-1.296-4.952-1.968c-1.912-0.8-3.824-1.6-5.72-2.4 c-1.632-0.72-3.256-1.461-4.872-2.224c-1.864-0.88-3.72-1.776-5.6-2.704c-1.6-0.8-3.2-1.6-4.8-2.472 c-1.808-0.968-3.6-1.96-5.392-2.984c-1.6-0.888-3.12-1.8-4.664-2.728c-1.76-1.056-3.488-2.144-5.216-3.256 c-1.52-0.968-3.04-1.952-4.536-2.96c-1.704-1.152-3.392-2.352-5.064-3.552c-1.464-1.048-2.928-2.096-4.368-3.2 c-1.656-1.248-3.28-2.536-4.896-3.832c-1.416-1.128-2.824-2.248-4.208-3.408c-1.6-1.328-3.144-2.712-4.696-4.088 c-1.36-1.208-2.728-2.4-4.056-3.632c-1.528-1.424-3.008-2.904-4.496-4.368c-1.288-1.272-2.6-2.528-3.864-3.832 c-0.232-0.248-0.456-0.504-0.688-0.744c17.445-9.018,35.827-16.095,54.816-21.104c9.877,31.494,27.449,60.029,51.128,83.024 C183.031,456.741,182.375,456.605,181.727,456.429z M231.447,463.389c-34.232-4.864-64.24-40.592-83.12-93.352 c27.296-6.112,55.151-9.391,83.12-9.784V463.389z M231.447,344.253c-29.67,0.39-59.215,3.914-88.144,10.512 c-10.045-34.707-15.344-70.615-15.752-106.744h103.896V344.253z M231.447,232.021H127.551 c0.407-36.129,5.706-72.037,15.752-106.744c28.929,6.597,58.475,10.121,88.144,10.512V232.021z M231.447,119.789 c-27.97-0.39-55.824-3.669-83.12-9.784c18.88-52.76,48.888-88.488,83.12-93.352V119.789z M411.903,97.181 c31.554,38.034,49.615,85.452,51.36,134.84h-95.92c-0.366-37.453-5.799-74.684-16.152-110.68 C372.307,115.7,392.685,107.591,411.903,97.181z M297.103,23.605c1.68,0.416,3.352,0.944,5.016,1.432 c2.024,0.592,4.056,1.184,6.056,1.832c1.688,0.544,3.352-1.128,5.016-1.712c1.968,0.68,3.936,1.376,5.88,2.12 c1.664-0.632,3.304-1.296-4.952-1.968c-1.912-0.8-3.824-1.6-5.72-2.4c1.632-0.72,3.256-1.461,4.872-2.224 c1.864-0.88,3.72-1.776,5.6-2.704c1.6-0.8,3.2-1.6,4.8-2.472c1.808-0.968,3.6-1.96,5.392-2.984c1.6-0.888,3.12-1.8,4.664-2.728 c1.76-1.056,3.488-2.144,5.216-3.256c1.52-0.968,3.04-1.952,4.536-2.96c1.704-1.152,3.384,2.344,5.056,3.544 c1.472,1.048,2.936,2.104,4.384,3.2c1.648,1.24,3.264,2.528,4.888,3.824c1.408,1.12,2.824,2.24,4.208,3.408 c1.6,1.328,3.144,2.712,4.696,4.088c1.36,1.208,2.728,2.4,4.056,3.632c1.528,1.424,3.008-2.904,4.496-4.368 c1.288,1.272,2.6,2.528,3.864,3.832c0.232,0.248,0.456,0.504,0.688,0.744c-17.445,9.018-35.827,16.095-54.816,21.104 c-9.896-31.498-27.491-60.031-51.192-83.016C295.799,23.293,296.455,23.429,297.103,23.605z M247.447,16.653 c34.232,4.864,64.24,40.592,83.12,93.352c-27.296,6.112-55.151,9.391-83.12,9.784V16.653z M247.447,135.789 c29.67-0.39,59.215-3.914,88.144-10.512c10.045,34.707,15.344,70.615,15.752,106.744H247.447V135.789z M247.447,248.021h103.896 c-0.407,36.129-5.706,72.037-15.752,106.744h0c-28.929-6.597-58.474-10.121-88.144-10.512V248.021z M247.447,463.389V360.253 c27.97,0.39,55.824,3.669,83.12,9.784C311.687,422.797,281.679,458.525,247.447,463.389z M400.399,395.741 c-1.264,1.304-2.568,2.56-3.856,3.832c-1.488,1.464-2.976,2.944-4.504,4.368c-1.328,1.24-2.696,2.4-4.056,3.64 c-1.552,1.376-3.096,2.752-4.68,4.08c-1.4,1.168-2.824,2.296-4.248,3.432c-1.6,1.28-3.2,2.56-4.848,3.792 c-1.456,1.096-2.936,2.16-4.424,3.2c-1.656,1.184-3.32,2.4-5.008,3.504c-1.512,1.024-3.04,2.016-4.576,2.992 c-1.712,1.104-3.437,2.171-5.176,3.2c-1.6,0.936-3.128,1.848-4.704,2.752c-1.771,1.008-3.552,1.992-5.344,2.952 c-1.6,0.853-3.2,1.688-4.8,2.504c-1.824,0.92-3.664,1.808-5.512,2.68c-1.6,0.76-3.264,1.52-4.912,2.24 c-1.88,0.8-3.784,1.6-5.688,2.4c-1.656,0.672-3.304,1.344-4.968,1.976c-1.952,0.744-3.912,1.44-5.88,2.12 c-1.664,0.584-3.328,1.168-5.016,1.712c-2,0.648-4,1.24-6.04,1.824c-1.672,0.496-3.352,0.992-5.04,1.448 c-0.648,0.168-1.296,0.304-1.944,0.472c23.68-22.993,41.253-51.529,51.128-83.024c18.988,5.008,37.37,12.082,54.816,21.096 C400.855,395.221,400.631,395.501,400.399,395.741z M411.903,382.861c-19.217-10.412-39.595-18.522-60.712-24.16 c10.352-35.996,15.786-73.227,16.152-110.68h95.92C461.521,297.409,443.459,344.828,411.903,382.861z"></path>
                            </g>
                          </g>
                        </svg>
                        <span className="contact-text">
                          <a
                            href="https://www.kazoum.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            www.kazoum.me
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right wow fadeInUp" data-wow-duration=".7s">
                <div className="fields">
                  <form
                    action="/"
                    method="post"
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className="first">
                      <ul>
                        <li>
                          <input id="name" type="text" placeholder="Name" />
                        </li>
                        <li>
                          <input id="email" type="text" placeholder="Email" />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="kura_tm_button">
                      <button type="submit" id="send_message">
                        <span>Submit</span>
                      </button>
                      {/* SVG for button icon can be added here if needed, or managed by existing JS */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
