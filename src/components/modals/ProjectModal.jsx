import React, { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Lock scroll on body and html
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Optional: prevent touch move (mobile)
    const preventTouch = (e) => e.preventDefault();
    document.body.addEventListener("touchmove", preventTouch, {
      passive: false,
    });

    return () => {
      // Restore scroll on close
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.removeEventListener("touchmove", preventTouch);
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="modal-content">
          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-description">
            <p>{project.description}</p>
          </div>

          <div className="tech-stack">
            <h4>Tech Stack</h4>
            <ul>
              {project.techStack.map((tech, index) => (
                <li key={index}>• {tech}</li>
              ))}
            </ul>
          </div>

          <h4>Screenshots </h4>

          {project.images.length > 0 && (
            <div className="modal-images">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`screenshot ${index + 1}`} />
              ))}
            </div>
          )}
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
          overscroll-behavior: contain; /* prevent scroll chaining */
        }

        .modal-container {
          background: #ffffff;
          border-radius: 15px;
          max-width: 800px;
          width: 100%;
          /* take full height minus padding */
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
          flex-grow: 1; /* take available space */
          overscroll-behavior: contain; /* prevent scroll chaining */
        }

        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 4px;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 25px;
          text-align: center;
          border-bottom: 2px solid #ff4522;
          padding-bottom: 15px;
          margin-top: 20px;
        }

        .modal-description {
          font-size: 15px;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        h4 {
          font-size: 18px;
          font-weight: 600;
          color: #ff4522;
          margin-bottom: 15px;
          border-left: 3px solid #ff4522;
          padding-left: 15px;
        }

        .tech-stack ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .tech-stack li {
          background-color: #f8fafc;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          color: #374151;
        }

        .modal-images {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
        }

        .modal-images img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 1024px) {
          .modal-images img {
            max-height: 450px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
