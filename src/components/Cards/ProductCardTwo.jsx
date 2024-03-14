import React from "react";
import Star from "../svg/Star";

function ProductCardTwo({ datas }) {
  return (
    <div className="product-cart-three w-full group">
      {/* thumb */}
      <div className="w-full h-[364px] bg-white flex justify-center items-center p-2.5 mb-6 relative overflow-hidden">
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}/src/assets/images/${
            datas.image
          }`}
          alt=""
        />
        <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out">
          <a href="#">
            <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
              <Star />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
              <Star />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
              <Star />
            </span>
          </a>
        </div>
        <div className="absolute w-full h-10 px-[30px]  left-0 bottom-3">
          <button
            type="button"
            className="black-btn w-full h-full flex justify-center items-center"
          >
            <div className="flex items-center space-x-3">
              <span>
                <Star />
              </span>
              <span>Add To Cart</span>
            </div>
          </button>
        </div>
      </div>
      <h2 className="text-xl leading-6 font-medium text-qblack mb-2">
        Women's Shirt Dress
      </h2>
      <p className="text-base leading-6 font-medium text-qgraytwo">
        $9.99 <span className="text-qred">$6.99</span>{" "}
      </p>
    </div>
  );
}

export default ProductCardTwo;
