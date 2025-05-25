import Link from "next/link";
import { Fragment, useEffect } from "react";
import Audio from "../src/components/Audio";
import Cursor from "../src/components/Cursor";
import PageHead from "../src/PageHead";

const Intro = () => {
  useEffect(() => {
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6192234f6bb0760a4942a6b6/1fkhdjruo";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <Fragment>
      <PageHead page="Intro" />
      <div
        className="kura_tm_all_wrap"
        data-magic-cursor="show"
        data-color="orange"
      >
        <div className="kura_tm_intro">
          <div className="short_info">
            <img src="img/logo/dark.png" alt="alt" />
            <h3>Personal Portfolio Nextjs Template</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
          <div className="demos mt-20">
            <div className="left">
              <div className="desc">
                <img src="img/intro/1.png" alt="demo" />
                <h3 className="title">Light Demo</h3>
              </div>
              <Link href="/">
                <a className="intro_link" target="_blank" />
              </Link>
            </div>
            <div className="right">
              <div className="desc">
                <img src="img/intro/2.png" alt="demo" />
                <h3 className="title">Dark Demo</h3>
              </div>
              <Link href="/index-dark">
                <a className="intro_link" target="_blank" />
              </Link>
            </div>
          </div>
        </div>
        <Audio />
        <Cursor />
      </div>
    </Fragment>
  );
};

export default Intro;
