import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";
import { useEffect } from "react";

// import "./styles.css";

export default function Parallax() {
  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=7e90gBu4pas",
    });
  });
  return <div className="jarallax" />;
}
