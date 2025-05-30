import { useState, useEffect } from "react";
import { HomeModal } from "./ContentModal";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    desc: "",
  });

  // Services array with detailed descriptions
  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      img: "/img/service/web.jpg",
      desc: `As a Full Stack JavaScript Developer, I create end-to-end web applications using modern technologies. 
      
      **Frontend Development:**
      • React.js & Next.js for dynamic, server-side rendered applications
      • Tailwind CSS for responsive, utility-first styling
      • TypeScript for type-safe development
      • State management with Redux, Zustand, or Context API
      
      **Backend Development:**
      • Node.js with Express.js for RESTful APIs
      • Nest.js for scalable, enterprise-grade applications
      • GraphQL for efficient data fetching and management
      • Authentication & authorization implementation
      
      **Database Integration:**
      • MongoDB, PostgreSQL, and MySQL
      • Prisma and TypeORM for database management
      • Real-time features with Socket.io
      
      I focus on creating scalable, maintainable applications with clean code architecture and optimal performance.`,
    },
    {
      id: 2,
      title: "SEO & Web Performance",
      img: "/img/service/seo.jpg",
      desc: `I optimize websites for search engines and peak performance to ensure maximum visibility and user experience.
      
      **SEO Optimization:**
      • Technical SEO audits and implementation
      • Meta tags, structured data, and schema markup
      • Site speed optimization and Core Web Vitals
      • Mobile-first indexing and responsive design
      • XML sitemaps and robots.txt optimization
      
      **Performance Enhancement:**
      • Code splitting and lazy loading implementation
      • Image optimization and modern formats (WebP, AVIF)
      • Caching strategies and CDN integration
      • Bundle size optimization and tree shaking
      • Server-side rendering (SSR) and static generation (SSG)
      
      **Analytics & Monitoring:**
      • Google Analytics and Search Console setup
      • Performance monitoring with Lighthouse
      • A/B testing implementation
      
      My goal is to achieve top search rankings while maintaining lightning-fast load times.`,
    },
    {
      id: 3,
      title: "Deployment & DevOps",
      img: "/img/service/devops.jpg",
      desc: `I handle the complete deployment pipeline and DevOps processes to ensure your applications run smoothly in production.
      
      **Cloud Deployment:**
      • AWS, Google Cloud Platform, and Azure deployment
      • Vercel and Netlify for frontend applications
      • Heroku and Railway for full-stack applications
      • Digital Ocean and Linode for VPS management
      
      **Containerization & Orchestration:**
      • Docker containerization for consistent environments
      • Docker Compose for multi-container applications
      • Kubernetes for container orchestration
      • Container registry management
      
      **CI/CD Pipeline:**
      • GitHub Actions, GitLab CI, and Jenkins setup
      • Automated testing and deployment workflows
      • Environment management (dev, staging, production)
      • Rollback strategies and blue-green deployments
      
      **Infrastructure as Code:**
      • Terraform and CloudFormation
      • Server configuration and monitoring
      • SSL certificate management and security hardening
      
      I ensure your applications are deployed securely, scale efficiently, and maintain high availability.`,
    },
    {
      id: 4,
      title: "UI/UX Design",
      img: "/img/service/design.jpg",
      desc: `I create intuitive, visually appealing user interfaces that provide exceptional user experiences across all devices.
      
      **UI Design:**
      • Modern, responsive design systems
      • Component libraries and design tokens
      • Figma to code conversion with pixel-perfect accuracy
      • Cross-browser compatibility and responsive layouts
      • Accessibility compliance (WCAG guidelines)
      
      **UX Research & Strategy:**
      • User journey mapping and wireframing
      • Usability testing and user feedback integration
      • Information architecture and site mapping
      • Conversion rate optimization (CRO)
      • A/B testing for design decisions
      
      **Frontend Implementation:**
      • CSS3 animations and micro-interactions
      • Tailwind CSS for rapid, consistent styling
      • CSS-in-JS solutions (Styled Components, Emotion)
      • Mobile-first design approach
      • Progressive Web App (PWA) features
      
      **Design Tools & Collaboration:**
      • Figma, Adobe XD, and Sketch proficiency
      • Design system documentation
      • Developer handoff and collaboration
      
      I bridge the gap between design and development, ensuring beautiful interfaces that convert visitors into customers.`,
    },
  ];

  const onOpenModal = (service) => {
    setOpen(true);
    setModalValue({
      img: service.img,
      title: service.title,
      desc: service.desc,
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", desc: "" });
  };

  // Add body class for animations
  useEffect(() => {
    document.body.classList.add("opened");
    return () => {
      document.body.classList.remove("opened");
    };
  }, []);

  const heroStyles = {
    width: "100%",
    minHeight: "100vh",
    float: "left",
    clear: "both",
    backgroundColor: "#f9f9f9",
  };

  const containerStyles = {
    minHeight: "100%",
  };

  const contentStyles = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const leftStyles = {
    width: "50%",
    // paddingRight: "50px",
    position: "relative",
    opacity: 1,
    visibility: "visible",
    top: "0px",
    WebkitTransition: "all 0.4s ease",
    MozTransition: "all 0.4s ease",
    msTransition: "all 0.4s ease",
    OTransition: "all 0.4s ease",
    transition: "all 0.4s ease",
  };

  const nameStyles = {
    display: "inline-block",
    marginBottom: "16px",
    color: "#ff4522",
    fontFamily: "Poppins",
    fontWeight: "500",
  };

  const jobStyles = {
    fontSize: "45px",
    fontWeight: "800",
    lineHeight: "1.4",
    textTransform: "uppercase",
    marginBottom: "25px",
  };

  const servicesStyles = {
    width: "100%",
    height: "auto",
    clear: "both",
    float: "left",
    marginBottom: "35px",
  };

  const servicesUlStyles = {
    margin: "0px",
    listStyleType: "none",
  };

  const servicesLiStyles = {
    width: "100%",
    float: "left",
    margin: "0px",
  };

  const servicesAStyles = {
    textDecoration: "none",
    color: "#000",
    fontSize: "17px",
    display: "inline-block",
    padding: "8px 0px",
    position: "relative",
    WebkitTransition: "all 0.3s ease",
    MozTransition: "all 0.3s ease",
    msTransition: "all 0.3s ease",
    OTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };

  const svgStyles = {
    position: "relative",
    top: "2px",
    width: "17px",
    height: "17px",
    left: "10px",
    WebkitTransition: "all 0.3s ease",
    MozTransition: "all 0.3s ease",
    msTransition: "all 0.3s ease",
    OTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };

  const imageStyles = {
    opacity: "0",
    visibility: "hidden",
    position: "absolute",
    zIndex: "-111",
  };

  const shortInfoStyles = {
    width: "100%",
    height: "auto",
    clear: "both",
    float: "left",
  };

  const shortInfoUlStyles = {
    margin: "0px",
    listStyleType: "none",
  };

  const shortInfoLiStyles = {
    margin: "0px 50px 15px 0px",
    display: "inline-block",
  };

  const shortInfoLiLastChildStyles = {
    margin: "0px 0px 15px 0px",
    display: "inline-block",
  };

  const listInnerStyles = {
    display: "flex",
    alignItems: "center",
  };

  const shortInfoH3Styles = {
    fontSize: "45px",
    fontWeight: "600",
  };

  const shortInfoSpanStyles = {
    fontFamily: "Poppins",
    paddingLeft: "15px",
    display: "inline-block",
    lineHeight: "1.4",
    position: "relative",
    top: "-3px",
    fontSize: "14px",
  };

  const rightStyles = {
    width: "50%",
    textAlign: "right",
    // paddingLeft: "100px",
    position: "relative",
    opacity: 1,
    visibility: "visible",
    top: "0px",
    WebkitTransition: "all 0.4s ease",
    MozTransition: "all 0.4s ease",
    msTransition: "all 0.4s ease",
    OTransition: "all 0.4s ease",
    transition: "all 0.4s ease",
  };

  const rightImageStyles = {
    position: "relative",
  };

  const rightImgStyles = {
    minWidth: "100%",
    position: "relative",
  };

  const downStyles = {
    position: "absolute",
    left: "0px",
    bottom: "10%",
    opacity: 1,
    visibility: "visible",
    WebkitTransition: "all 0.4s ease",
    MozTransition: "all 0.4s ease",
    msTransition: "all 0.4s ease",
    OTransition: "all 0.4s ease",
    transition: "all 0.4s ease",
  };

  const downSvgStyles = {
    width: "40px",
    height: "40px",
    animation: "scroll ease 2s infinite",
  };

  const downAStyles = {
    textDecoration: "none",
    color: "#000",
    WebkitTransition: "all 0.3s ease",
    MozTransition: "all 0.3s ease",
    msTransition: "all 0.3s ease",
    OTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            30% {
              transform: translateY(20px);
            }
          }
          
          .services-link:hover {
            color: #ff4522 !important;
          }
          
          .services-link:hover .services-svg {
            transform: rotate(-50deg);
            color: #ff4522;
          }
          
          .down-link:hover {
            color: #ff4522 !important;
          }

 @media (max-width: 768px) {

   .kura_tm_hero {
    padding: 80px 0px 120px 0px;
  }

  .job span {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}

      .content {
        flex-direction: column !important;
        padding: 30px 15px;
        min-height: auto !important;
      }

      .left, .right {
        width: 100% !important;
        padding: 0px !important;
        text-align: center !important;
      }

      .left h3 {
        font-size: 28px !important;
        line-height: 1.3 !important;
        margin-bottom: 20px !important;
      }

      .short_info ul {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        padding: 0;
      }

      .short_info li {
        margin-right: 0px !important;
        margin-bottom: 10px !important;
      }

      .services ul {
        padding-left: 0 !important;
      }

      .services-link {
        font-size: 15px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        flex-direction: column !important;
        gap: 5px;
      }

      .services-svg {
        position: static !important;
        left: 0px !important;
        top: 0px !important;
      }

      .down {
        position: static !important;
        margin-top: 30px;
        text-align: center;
      }

      .job {
        font-size: 28px !important;
      }

    }
  `}
      </style>
      <div className="kura_tm_section" id="home">
        <div className="kura_tm_hero" style={heroStyles}>
          <div className="container" style={containerStyles}>
            <div className="content" style={contentStyles}>
              <div className="left" style={leftStyles}>
                <span className="name" style={nameStyles}>
                  👋Hi, Welcome There!
                </span>
                <h3 className="job" style={jobStyles}>
                  I'm{" "}
                  <span style={{ color: "#" }}>
                    <Typewriter
                      words={["Abdelaziz Kazoum", "a Full Stack JS Developer"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      cursorColor="#ff4522" // Add this line
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={3000}
                    />
                  </span>
                </h3>

                <div className="services" style={servicesStyles}>
                  <ul style={servicesUlStyles}>
                    {services.map((service) => (
                      <li key={service.id} style={servicesLiStyles}>
                        <a
                          href="#"
                          className="services-link"
                          style={servicesAStyles}
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenModal(service);
                          }}
                        >
                          <img
                            className="image"
                            style={imageStyles}
                            src={service.img}
                            alt=""
                          />
                          <span>{service.title}</span>
                          <img
                            className="svg services-svg"
                            style={svgStyles}
                            src="/img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="short_info" style={shortInfoStyles}>
                  <ul style={shortInfoUlStyles}>
                    <li style={shortInfoLiStyles}>
                      <div className="list_inner" style={listInnerStyles}>
                        <h3 style={shortInfoH3Styles}>4+</h3>
                        <span style={shortInfoSpanStyles}>
                          Years of
                          <br />
                          Experience
                        </span>
                      </div>
                    </li>
                    <li style={shortInfoLiLastChildStyles}>
                      <div className="list_inner" style={listInnerStyles}>
                        <h3 style={shortInfoH3Styles}>50+</h3>
                        <span style={shortInfoSpanStyles}>
                          Projects
                          <br />
                          Delivered
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right" style={rightStyles}>
                <div className="image" style={rightImageStyles}>
                  <img style={rightImgStyles} src="/img/logo/logo.svg" alt="" />
                </div>
              </div>

              <div className="down anchor" style={downStyles}>
                <a href="#portfolio" className="down-link" style={downAStyles}>
                  <img
                    className="svg"
                    style={downSvgStyles}
                    src="/img/svg/down-arrow.svg"
                    alt=""
                  />
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
          desc={modalValue.desc}
        />
      </div>
    </>
  );
};

export default Home;
