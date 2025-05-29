// ProjectModal.jsx
import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="tech-stack">
          <strong>Tech Stack:</strong>
          <ul>
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="modal-images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`screenshot ${index + 1}`} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .modal-container {
          background: white;
          padding: 30px;
          border-radius: 10px;
          max-width: 800px;
          width: 100%;
          overflow-y: auto;
          max-height: 90vh;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-images img {
          max-width: 100%;
          margin-bottom: 10px;
          border-radius: 5px;
        }
        .tech-stack ul {
          list-style: disc;
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
