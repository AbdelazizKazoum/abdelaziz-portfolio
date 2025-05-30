import { Modal } from "react-responsive-modal";

export const HomeModal = ({ open, onCloseModal, img, title, desc }) => {
  const formatDescription = (text) => {
    if (!text) return null;

    const sections = text.split("\n\n");

    return sections.map((section, index) => {
      const lines = section.split("\n");
      const processedElements = [];

      lines.forEach((line, lineIndex) => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
          const headerText = trimmedLine.replace(/\*\*/g, "").trim();
          processedElements.push({
            type: "header",
            content: headerText,
            key: `${index}-${lineIndex}-header`,
          });
        } else if (trimmedLine.startsWith("•")) {
          processedElements.push({
            type: "bullet",
            content: trimmedLine.replace("•", "").trim(),
            key: `${index}-${lineIndex}-bullet`,
          });
        } else if (trimmedLine) {
          processedElements.push({
            type: "text",
            content: trimmedLine,
            key: `${index}-${lineIndex}-text`,
          });
        }
      });

      if (processedElements.length === 0 && section.trim()) {
        return (
          <p
            key={index}
            style={{
              marginBottom: "15px",
              lineHeight: "1.6",
              fontSize: "15px",
              color: "#374151",
            }}
          >
            {section.trim()}
          </p>
        );
      }

      return (
        <div key={index} style={{ marginBottom: "20px" }}>
          {processedElements.map((element) => {
            if (element.type === "header") {
              return (
                <h4
                  key={element.key}
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#ff4522",
                    marginTop: "25px",
                    marginBottom: "15px",
                    paddingLeft: "15px",
                    borderLeft: "3px solid #ff4522",
                    display: "block",
                    width: "100%",
                  }}
                >
                  {element.content}
                </h4>
              );
            } else if (element.type === "bullet") {
              return (
                <div
                  key={element.key}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                    backgroundColor: "#f8fafc",
                    padding: "8px 15px",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#ff4522",
                      fontSize: "16px",
                      marginRight: "12px",
                      lineHeight: "1.6",
                      fontWeight: "600",
                    }}
                  >
                    •
                  </span>
                  <span
                    style={{
                      lineHeight: "1.6",
                      fontSize: "15px",
                      color: "#374151",
                    }}
                  >
                    {element.content}
                  </span>
                </div>
              );
            } else {
              return (
                <p
                  key={element.key}
                  style={{
                    marginBottom: "15px",
                    lineHeight: "1.6",
                    fontSize: "15px",
                    color: "#374151",
                  }}
                >
                  {element.content}
                </p>
              );
            }
          })}
        </div>
      );
    });
  };

  const modalStyles = {
    boxInner: {
      maxWidth: "800px",
      width: "100%",
      maxHeight: "90vh",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    descriptionWrap: {
      flex: 1,
      overflowY: "auto",
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
    },
    innerContent: {
      padding: "40px",
      boxSizing: "border-box",
    },
    image: {
      width: "100%",
      marginBottom: "30px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    img: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      display: "block",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "25px",
      textAlign: "center",
      borderBottom: "2px solid #ff4522",
      paddingBottom: "15px",
    },
    description: {
      color: "#374151",
      lineHeight: "1.8",
    },
  };

  const customModalStyles = {
    modal: {
      padding: "0",
      background: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      maxWidth: "800px",
      width: "90%",
      maxHeight: "90vh",
      margin: "20px",
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      open={open}
      onClose={() => onCloseModal()}
      center
      styles={customModalStyles}
      closeOnOverlayClick={true}
    >
      <div className="box_inner" style={modalStyles.boxInner}>
        <div className="description_wrap" style={modalStyles.descriptionWrap}>
          <div style={modalStyles.innerContent}>
            <div className="service_popup_information">
              {img && (
                <div className="image" style={modalStyles.image}>
                  <img src={img} alt={title} style={modalStyles.img} />
                </div>
              )}
              <div className="details">
                <h3 style={modalStyles.title}>{title || "Service Details"}</h3>
              </div>
              <div className="description" style={modalStyles.description}>
                {formatDescription(desc)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const NewsModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div
        className="box_inner"
        style={{
          maxWidth: "800px",
          width: "100%",
          maxHeight: "90vh",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="description_wrap"
          style={{
            flex: 1,
            overflowY: "auto",
            boxSizing: "border-box",
            padding: "30px",
          }}
        >
          <div className="news_popup_informations">
            {img && (
              <div
                className="image"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    display: "block",
                  }}
                />
              </div>
            )}
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title || "VS Code Gets New JavaScript Debugger"}</h3>
            </div>
            <div
              className="text"
              style={{ lineHeight: "1.8", color: "#374151" }}
            >
              <p>
                Kura is a leading web design agency with an award-winning design
                team that creates innovative, effective websites that capture
                your brand, improve your conversion rates, and maximize your
                revenue.
              </p>
              <p>
                In today's digital world, your website is the first interaction
                consumers have with your business. That's why almost 95 percent
                of a user's first impression relates to web design.
              </p>
              <p>
                That’s why more companies are not only reevaluating their
                website's design but also partnering with Kura, the web design
                agency that's driven more than $2.4 billion in revenue for its
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
