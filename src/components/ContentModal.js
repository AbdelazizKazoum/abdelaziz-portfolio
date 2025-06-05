import React, { useEffect } from "react";

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

export const HomeModal = ({ open, onCloseModal, img, title, desc }) => {
  useEffect(() => {
    if (open) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const preventTouch = (e) => e.preventDefault();
      document.body.addEventListener("touchmove", preventTouch, {
        passive: false,
      });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.removeEventListener("touchmove", preventTouch);
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onCloseModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-btn" onClick={onCloseModal}>
            ✖
          </button>
        </div>

        <div className="modal-content">
          {img && (
            <div className="modal-image">
              <img src={img} alt={title} />
            </div>
          )}
          <h2 className="modal-title">{title || "Service Details"}</h2>
          <div className="modal-description">{formatDescription(desc)}</div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          overscroll-behavior: contain;
        }

        .modal-container {
          background: #ffffff;
          border-radius: 15px;
          max-width: 800px;
          width: 100%;
          max-height: calc(100vh - 40px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .modal-header {
          background: #ffffff;
          padding: 10px 20px;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          justify-content: flex-end;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #6b7280;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #111827;
        }

        .modal-content {
          padding: 0 40px 40px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
          flex-grow: 1;
          overscroll-behavior: contain;
        }

        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 4px;
        }

        .modal-image {
          width: 100%; /* Container takes full available width */
          margin-bottom: 30px;
          margin-top: 20px;
          border-radius: 10px;
          overflow: hidden; /* Good if image itself has border-radius or for other styling */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .modal-image img {
          display: block; /* Removes extra space below image */
          max-width: 100%; /* Image won't exceed container width, scales down if larger */
          height: auto; /* Maintains aspect ratio */
          margin-left: auto; /* Centers the image if it's narrower than the container */
          margin-right: auto; /* Centers the image if it's narrower than the container */
          /* Removed: width: 100%; height: 250px; object-fit: cover; */
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 25px;
          text-align: center;
          border-bottom: 2px solid #ff4522;
          padding-bottom: 15px;
        }

        .modal-description {
          font-size: 15px;
          color: #374151;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

// The NewsModal component remains unchanged as per the request.
export const NewsModal = ({ open, onCloseModal, img, title, date, desc }) => {
  useEffect(() => {
    if (open) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const preventTouch = (e) => e.preventDefault();
      document.body.addEventListener("touchmove", preventTouch, {
        passive: false,
      });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.removeEventListener("touchmove", preventTouch);
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onCloseModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-btn" onClick={onCloseModal}>
            ✖
          </button>
        </div>

        <div className="modal-content">
          {img && (
            <div className="modal-image">
              <img src={img} alt={title} />
            </div>
          )}

          <div className="news-details">
            {date && <span className="news-date">{date}</span>}
            <h2 className="modal-title">
              {title || "VS Code Gets New JavaScript Debugger"}
            </h2>
          </div>

          <div className="modal-description">
            <div className="modal-description">{formatDescription(desc)}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          overscroll-behavior: contain;
        }

        .modal-container {
          background: #ffffff;
          border-radius: 15px;
          max-width: 800px;
          width: 100%;
          max-height: calc(100vh - 40px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .modal-header {
          background: #ffffff;
          padding: 10px 20px;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          justify-content: flex-end;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #6b7280;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #111827;
        }

        .modal-content {
          padding: 0 40px 40px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
          flex-grow: 1;
          overscroll-behavior: contain;
        }

        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 4px;
        }

        .modal-image {
          width: 100%;
          margin-bottom: 20px;
          margin-top: 20px;
          border-radius: 10px;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          display: block;
        }

        .news-details {
          margin-bottom: 20px;
        }

        .news-date {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 10px;
          display: block;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 25px;
          text-align: center;
          border-bottom: 2px solid #ff4522;
          padding-bottom: 15px;
        }

        .modal-description {
          color: #374151;
          line-height: 1.8;
        }

        .modal-description p {
          margin-bottom: 15px;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};
