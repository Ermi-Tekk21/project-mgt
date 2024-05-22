import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { arrowDown, arrowRight } from "../assets/icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Ham({ isOpen, setIsOpen }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const { pathname } = location;
  return (
    <div
      className={`bg-hero bg-cover p-4 absolute left-0 rounded-3xl border-2 border-sky-300
         bg-slate-50 w-full shadow-lg
        ${!isOpen ? "hidden" : ""}`}
    >
      <div className="flex flex-col items-center mb-[40px]">
        <ul data-aos="fade-right" className="flex flex-col items-center">
          {navLinks.map((item, index) => (
            <li key={index} className={`mb-10`}>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Link
                  to={item.path}
                  className={`font-montserrat text-lg text-slate-500 hover:underline   hover:underline-offset-[25px]
            transition delay-100 hover:text-blue-500 duration-50 rounded-lg px-4 py-1 
            focus:-translate-y-1 focus:scale-110 focus:bg-indigo-100 hover:shadow-sm z-auto
            ${
              pathname.includes(item.path)
                ? "underline underline-offset-[25px] shadow-sm bg-slate-300 text-[#438bf0]"
                : ""
            }
            `}
                >
                  {item.title}
                </Link>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Link to="/log-in">
              <img
                src={arrowRight}
                alt="topcloth"
                width={40}
                height={40}
                className="border-2 border-sky-600 rounded-full bg-slate-50 animate-pulse "
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ham;
