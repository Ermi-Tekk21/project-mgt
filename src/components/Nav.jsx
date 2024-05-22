import { useState, useEffect } from "react";
import { navLinks, procedLink } from "../constants";
import { arrowRight, cartImg, menu, own_best } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { Ham, CartCard } from "./";
import { close } from "../assets/icons";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { pathname, search, hash } = location;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  //hide and display the nav automatically
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const user = localStorage.getItem("curUser");
  const curUser = JSON.parse(user);
  return (
    <>
      {visible && (
        <header
          className={`fixed padding-x py-4 w-full z-30 bg-slate-50 items-center  
        ${pathname.includes("/user-account") ? "bg-transparent" : "shadow"}
        `}
        >
          <nav className="flex items-center gap-4 justify-around">
            <nav className="flex flex-1">
              <Link to="/home">
                <img
                  src={own_best}
                  alt="logo"
                  className={`max-lg:w-[90px] w-[140px]
                  ${
                    pathname.includes("/user-account")
                      ? "bg-slate-200 rounded-full px-2 py-1"
                      : ""
                  }
                  `}
                />
              </Link>
            </nav>
            <ul
              className={`flex gap-6 max-lg:hidden 
            ${pathname.includes("/user-account") ? "hidden" : ""}`}
            >
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`font-montserrat text-lg text-slate-gray hover:underline hover:underline-offset-[25px]
                            transition delay-100 hover:text-blue-500 duration-50 rounded-lg px-4 py-1 
                            focus:-translate-y-1 focus:scale-110 hover:shadow-sm z-auto
                            ${
                              pathname.includes(item.path)
                                ? "underline underline-offset-[25px] shadow-sm bg-indigo-100 text-[#3c87f0]"
                                : ""
                            }
                            `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className={`flex gap-1 items-center text-white bg-coral-sky px-8 py-2 text-sm rounded-full max-lg:hidden
            ${pathname.includes("/user-account") ? "hidden" : ""}
            `}
            >
              {procedLink.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`hover:font-semibold thover:tex-blue-500 hover:underline hover:underline-offset-[25px] ${item.className}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <img
                src={arrowRight}
                className="hover:translate-x-1 mx-2"
                alt=""
                width={15}
                height={15}
              />
            </ul>
            {/* log out tab */}
            <button
              className={`items-center text-white bg-coral-sky px-8 py-2 text-sm rounded-full
            ${pathname.includes("/user-account") ? "" : "hidden"}
            `}
              onClick={() => {
                localStorage.setItem("curUser", null);
                localStorage.setItem("products", []);
              }}
            >
              <Link to="/">
                <span className="hover:font-semibold font-serif">log out</span>{" "}
                |{" "}
                <span className="capitalize text-blue-950">
                  {curUser ? curUser[0]["fullName"] : ""}
                </span>
              </Link>
            </button>
            

            <div
              className={`lg:hidden
            ${pathname.includes("/user-account") ? "hidden" : ""}
            `}
            >
              <button onClick={handleClick}>
                <img
                  src={menu}
                  alt="menu"
                  className={`w-6 -z-40 ${isOpen ? "hidden" : ""}`}
                />
                <img
                  src={close}
                  alt="closemenu"
                  className={`animate-pulse w-6 -z-40 ${
                    !isOpen ? "hidden" : ""
                  }`}
                />
              </button>
              <Ham isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </nav>
        </header>
      )}
    </>
  );
};
export default Nav;
