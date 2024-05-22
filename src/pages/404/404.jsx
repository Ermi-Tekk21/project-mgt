import React, { useEffect } from "react";
import { notfound } from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

function RouteNotExist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
        <img
          src={notfound}
          alt="page not found"
          data-aos="fade-left"
          className="max-md:p-5 max-md:w-full text-center min-h-screen"
        />
  );
}

export default RouteNotExist;
