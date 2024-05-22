import React, { useEffect, useRef } from "react";
import { ownbestAdv } from "../../assets/videos";
import { About_us } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const videoRef = useRef(null);
  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="padding">
      <h2 data-aos="fade-down-right" className="text-4xl font-palanquin pt-10 font-bold">
        ABOUT <span className="text-coral-sky underline"> US </span>
      </h2>
      <div className="grid grid-cols-2 gap-6 max-xl:flex flex-col-reverse items-center ">
        <div data-aos="fade-right"  className="">
          <h1 className="text-sky-400 font-montserrat">
            <i>{About_us.title}</i>
          </h1>
          <br />
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            {About_us.About_text}
          </p>
          <br />
          <h1 className="text-sky-400 font-montserrat">
            <i>#our story</i>
          </h1>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            {About_us.Our_Story}
          </p>
        </div>
        <div data-aos="fade-left"  className="border-[0.5px] border-sky-400 p-2 rounded-lg 
        max-xl:mt-10 shadow-md shadow-sky-400 hover:border-slate-400 hover:shadow-slate-400 hover:rotate-2">
          <video
            ref={videoRef}
            autoPlay
            muted
            onEnded={restartVideo}
          >
            <source src={ownbestAdv} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
export default About;
