import { useState } from "react";
import { useLocation } from "react-router-dom";

const PopularProductCard = ({ imgURL, name, price }) => {
  const location = useLocation();
  const { pathname, search, hash } = location;
  const [isAdded, setIsAdded] = useState(false);
  const handleCartBtn = () => {
    // Retrieve existing data from local storage

    
    const existingDataString = localStorage.getItem("products");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];

    // New data to be added
    const newData = {
      imgURL: imgURL,
      name: name,
      price: price,
    };
    setIsAdded(true);
    // Push new data to existing data array
    existingData.push(newData);

    // Convert the modified array back into a JSON string
    const updatedDataString = JSON.stringify(existingData);

    // Update local storage with the updated JSON string
    localStorage.setItem("products", updatedDataString);
    console.log(existingData);
  };
  return (
    <div class="bg-gray-100 rounded-2xl p-10 cursor-pointer hover:-translate-y-2 transition-all relative shadow-lg hover:border-2 border-sky-400">
      <div class="w-170px] h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src={imgURL}
          alt="Product 3"
          width={24}
          height={24}
          class="h-full w-full object-contain"
        />
      </div>
      <hr />
      <div class="text-center mt-4">
        <h3 class="text-lg font-bold text-gray-800">{name}</h3>
        <h4 class="text-xl text-gray-700 font-bold mt-4">{price}</h4>
        <button
          onClick={handleCartBtn}
          type="button"
          class="w-full mt-6 px-4 py-3 bg-[#717070] hover:bg-[#474646] text-white rounded-full"
        >
          {/* Add to cart */}
          {pathname.includes("/user-account")
            ? isAdded
              ? "added"
              : "add to cart"
            : "sign-in to buy"}
        </button>
      </div>
    </div>
  );
};

export default PopularProductCard;
