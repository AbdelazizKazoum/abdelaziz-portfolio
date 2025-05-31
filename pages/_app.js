import { Fragment, useEffect } from "react";
import PreLoader from "../src/layout/PreLoader";
import { aTagClick, kura_tm_my_load, wowJsAnimation } from "../src/utilits";
import "../styles/globalstyle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    kura_tm_my_load();
    wowJsAnimation();
    aTagClick();
  });
  return (
    <Fragment>
      <PreLoader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
