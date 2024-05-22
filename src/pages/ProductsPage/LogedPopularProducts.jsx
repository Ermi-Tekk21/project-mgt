import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PopularProductCatagory } from "../../constants";
import { PopularProductCard, PopularBtn, CartCard } from "../../components";
import { cartImg } from "../../assets/icons";
import { useLocation } from "react-router-dom";

const LogedPopularProducts = () => {
  const [currentPop, setCurrentPop] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { pathname, search, hash } = location;

  useEffect(() => {
    AOS.init();
  }, []);
  // user data
  const user = localStorage.getItem("curUser");
  const curUser = JSON.parse(user);
  // cart data
  const cartData = localStorage.getItem('products');
  const existingCartData = cartData ? JSON.parse(cartData) : [];
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const display=()=>{
    // window.Location.reload();
    console.log(existingCartData);
  }
  return (
    <section>
      <div className="w-full h-[400px] shadow-sm max-md:bg-banner md:bg-welcome bg-cover bg-center flex flex-col justify-center items-end">
        <div data-aos="fade-down" className="mr-[30px] ml-10">
          <h2 className="text-4xl max-md:text-slate-200 font-palanquin font-bold">
            Welcome dear
            <span className="text-coral-sky capitalize">
              {" "}
              {curUser ? curUser[0]["fullName"] : ""}{" "}
            </span>
          </h2>
          <p className="max-md:text-sky-300 text-sky-500 font-montserrat">
            <i>
              # explore using our
              <span className="font-semibold animate-pulse">catagories</span>
            </i>
          </p>
        </div>

        {/* handle cart */}

        <div className="flex gap-5 justify-around mr-10">
          <button
            onClick={handleCart}
            className={`flex gap-4 bg-sky-50 shadow-lg hover:bg-sky-200 items-cente border-[0.5px] border-sky-400 px-8 py-2 text-sm rounded-full mb-10
            ${pathname.includes("/user-account") ? "" : "hidden"}
            `}
          >
            <p className="text-blue-500 ">my cart</p>
            <div>
              <img
                src={cartImg}
                width={25}
                height={25}
                alt=""
                className="hover:animate-bounce"
              />
              
            </div>
          </button>
          <CartCard isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
        </div>
      </div>
      <div className="max-containe padding max-sm:mt-12 ">
        <div className="flex flex-col gap-5">
          <div className="md:flex gap-10 items-center">
            <div>
              <h2
                data-aos="fade-down-right"
                className="text-4xl font-palanquin font-bold"
              >
                Our <span className="text-coral-sky"> Popular </span> Products
              </h2>
              <br />
              <p className="text-sky-400 font-montserrat">
                <i>
                  # explore using our{" "}
                  <span className="font-semibold animate-pulse">
                    catagories
                  </span>
                </i>
              </p>
            </div>

            <div
              data-aos="fade-down-right"
              className="flex gap-4 mt-4 max-[380px]:flex-col justify-center items-center"
            >
              {PopularProductCatagory.map((item) => (
                <div key={item.id}>
                  <PopularBtn
                    label={item.catagotyName}
                    changeCatagory={(newCatagory) => setCurrentPop(newCatagory)}
                    currentPop={currentPop}
                  />
                </div>
              ))}
            </div>
          </div>

          <p
            data-aos="fade-right"
            className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
          >
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mt-16 grid xl:grid-cols-5 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
            {currentPop.map((product) => (
              <PopularProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogedPopularProducts;
