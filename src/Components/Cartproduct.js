import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
  const location = useLocation();
  const [details, setdetails] = React.useState(location.state.productList);
  const [incValue, setIncValue] = React.useState([
    location.state.incrementData,
  ]);
  console.log(location.state.productList);
  console.log(details.map.price);

  const Navigation = useNavigate();

  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="flex flex-col justify-between ml-4 flex-grow gap-y-4">
                {details.map((item) => {
                  return (
                    <>
                      {item.clicked && item.clicked == true ? (
                        <div class="flex w-full">
                          {/* <!-- product --> */}
                          <div class="w-20">
                            <img class="h-24" src={item.img} alt="" />
                          </div>
                          <div class="flex flex-col justify-between ml-4 ">
                            <span class="text-red-500 text-sm">
                              {item.Name}
                            </span>
                            <span class="text-center w-1/5 font-semibold text-sm">
                              {item.price}
                            </span>
                          </div>
                          <div class="flex justify-center w-1/5"></div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
          </div>

          <a  onClick={() => Navigation("/")} class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            check out
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
