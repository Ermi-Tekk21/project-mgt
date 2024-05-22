import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CartCard({ isOpen, setIsOpen }) {
  useEffect(() => {
    AOS.init();
  }, []);

  // cart data
  const cartData = localStorage.getItem('products');
  const existingCartData = cartData ? JSON.parse(cartData) : [];

  const [numberOfProducts, setNumberOfProducts] = useState(Array(existingCartData.length).fill(1));

  const handleProductChange = (index, event) => {
    // Parse the input value as an integer
    const value = parseInt(event.target.value);
    // Create a copy of the state array
    const newNumberOfProducts = [...numberOfProducts];
    // Update the value at the specified index
    newNumberOfProducts[index] = value;
    // Update the state with the new array
    setNumberOfProducts(newNumberOfProducts);
  };

   //total sum
  // existingCartData.forEach((item) => {
  //   const intValue = parseInt(item.price.replace('$', ''), 10);
  //   total += intValue;
  // });

  const dataa = []
  existingCartData.forEach((item) => {
  dataa.push(parseInt(item.price.replace('$', ''), 10));
  });
  // the two arrays are numberOfProducts and dataa
  
  let i = 0;
  let total = 0; // Changed from const to let
  
  const calculateTotalSum = () => {
      for (i; i < numberOfProducts.length; i++) {
          total = total + (numberOfProducts[i] * dataa[i]);
      }
      return total;
  };
  
  const res = calculateTotalSum();
  console.log(res);

  return (
      <div className={`z-40 p-10 bg-hero bg-cover absolute left-1/4 m-auto rounded-3xl border-[0.5px] border-sky-300 mt-10
         bg-slate-50 w-3/4 shadow-lg h-[600px] overflow-auto
        ${!isOpen ? "hidden" : "scrol-y"}`}>
      <div className="max-w-7xl w-full p-10">
        <h2 className="text-3xl font-extrabold text-[#333]">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-500 p-4">Description</th>
                <th className="text-base text-gray-500 p-4">Size</th>
                <th className="text-base text-gray-500 p-4">Quantity</th>
                <th className="text-base text-gray-500 p-4">Remove</th>
                <th className="text-base text-gray-500 p-4">Price</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y">
              
              {existingCartData.map((item, index)=>(
                <tr>
                <td className="py-6 px-4 ">
                  <div className="flex items-center gap-6 w-max">
                    <div className="h-36 shrink-0">
                      <img src={item.imgURL} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#333]">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <button type="button" className="bg-transparent border px-4 py-2 font-semibold text-sm">
                    M
                  </button>
                </td>
                <td className="py-6 px-4">
                  <div>
                    <input type="number" className="opacity-50 border-[0.5px] w-1/2 border-sky-500 font-thin text-center" value={numberOfProducts[index]<=0 ? 1:numberOfProducts[index]} onChange={(event) => handleProductChange(index, event)} placeholder="No. of products" />
                  </div> 
                </td>
                <td className="py-6 px-4">
                  <button type="button" className="bg-transparent border px-4 py-2 font-semibold"
                  // onClick={()=>{
                  //   existingCartData.filter(product => product.catagory === "women's");
                  //   console.log(existingCartData);
                    
                  //   for (let i = existingCartData.length - 1; i >= 0; i--) {
                  //     if (existingCartData[i].catagory === "child's") {
                  //         products.splice(i, 1);
                  //     }
                  // }
                  
                  // console.log(products);
                  // }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"></path>
                      <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"></path>
                    </svg>
                  </button>
                </td>
                <td className="py-6 px-4">
                  <h4 className="text-lg font-bold text-[#333]">${numberOfProducts[index]<=1 ? parseInt(item.price.replace('$', ''), 10) : numberOfProducts[index]*parseInt(item.price.replace('$', ''), 10)}</h4>
                </td>
              </tr> 
              ))}
            </tbody>
          </table>
        </div>
        <div className=" max-w-xl ml-auto mt-6">
          <ul className="text-[#333] divide-y">
            <li className="flex flex-wrap gap-4 text-md py-3">Subtotal <span className="ml-auto font-bold">${total}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-3">Shipping <span className="text-slate-400">(2%)</span> <span className="ml-auto font-bold">${total*0.02}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-3">Tax <span className="text-slate-400">(3%)</span> <span className="ml-auto font-bold">${total*0.03}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-3 font-bold">Total <span className="ml-auto">${total+(total*0.02)+(total*0.03)}</span></li>
          </ul>
          <button type="button" className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check
            out</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
