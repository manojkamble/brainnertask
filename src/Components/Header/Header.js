import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "./data.json";

function Header() {
  const [productData, setProductData] = React.useState({});
  const [increment, setIncrement] = React.useState(0);

  console.log(Data);
  const Navigation = useNavigate();

  // const addCart = (item) => {
  //   setIncrement(increment + 1);
  //   setProductData(item);
  // };
  console.log(productData);

let manoj = Data


  function addCart(id) {
    manoj[id-1].clicked= true
    // const updatedTasksEdit = [...Data].map((task) => {
    //   if (task.id === id) {
    //  task = productData
    //   }
    //   return task
    // });
setProductData(manoj)
   setIncrement(increment + 1); 
  }

  console.log(productData);


  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         
          <span class="font-semibold text-xl tracking-tight">Mobile Mart</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block  lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <button
              href="#responsive-header"
              onClick={() =>
                Navigation("/cartlist", {
                  state: { productList: productData , incrementData:increment},
                })
              }
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Cart {increment}
            </button>
          </div>
          <div>
            <a
              onClick={() => Navigation("/")}
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Log Out
            </a>
          </div>
        </div>
      </nav>
      <div class="container  flex-col justify-center mx-auto my-10">
        {Data.map((item) => {
          return (
            <>
              <div class="relative flex flex-col  gap-y-4 my-4 overflow-hidden justify-center">
                <div class="flex mt-10 mb-5">
                  <h3 class="font-semibold text-gray-600 text-xs uppercase w-full">
                    Product Details
                  </h3>
                </div>
                <div class="flex w-full">
                  {/* <!-- product --> */}
                  <div class="w-20">
                    <img class="h-24" src={item.img} alt="" />
                  </div>
                  <div class="flex flex-col justify-between ml-4 ">
                    <span class="text-red-500 text-sm">{item.Name}</span>
                    <span class="text-center w-1/5 font-semibold text-sm">
                      {item.price}
                    </span>
                  </div>
                  <div class="flex justify-center w-1/5"></div>
                  <button onClick={() => addCart(item.id)}>Add Cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Header;
