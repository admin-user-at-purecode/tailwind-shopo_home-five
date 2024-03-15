import { useEffect, useState } from "react";
import Star from "../svg/Star";
import {
  categories,
  homePageMenuItems,
  productLayoutsMenuItems,
  shopListMenuItems,
  popularCategoriesMenuItems,
  pagesMenuItems,
} from "../Constants";

export default function Navbar({ className }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");

  const handler = () => {
    setToggle(!categoryToggle);
  };
  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh5-bwhite h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <span>
                      <Star />
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      All Categories
                    </span>
                  </div>
                  <div>
                    <Star />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={handler}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">
                    {categories.map((category, index) => (
                      <li key={index} className="category-item">
                        <div
                          className={
                            "flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white"
                          }
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                              <Star />
                            </span>
                            <span className="text-xs font-400">
                              {category.name}
                            </span>
                          </div>
                          <div>
                            <span>
                              <Star />
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li className="relative">
                    <span
                      className={
                        "flex items-center text-sm font-600 cursor-pointer text-qblacktext"
                      }
                    >
                      <span>Homepage</span>
                      <span className="ml-1.5 ">
                        <Star />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {homePageMenuItems.map((item, index) => (
                                  <li key={index}>
                                    <span
                                      className={
                                        "text-qgray text-sm font-400 border-b border-transparent hover:text-qyellow hover:border-qyellow"
                                      }
                                    >
                                      {item.name}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span
                      className={
                        "flex items-center text-sm font-600 cursor-pointer text-qblacktext"
                      }
                    >
                      <span>Shop</span>
                      <span className="ml-1.5 ">
                        <Star />
                      </span>
                    </span>
                  </li>
                  <li className="relative">
                    <span
                      className={
                        "flex items-center text-sm font-600 cursor-pointer text-qblacktext"
                      }
                    >
                      <span>Pages</span>
                      <span className="ml-1.5 ">
                        <Star />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {pagesMenuItems.map((item, index) => (
                                  <li key={index}>
                                    <span
                                      className={
                                        "text-qgray text-sm font-400 border-b border-transparent hover:text-qyellow hover:border-qyellow"
                                      }
                                    >
                                      {item.name}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span
                      className={
                        "flex items-center text-sm font-600 cursor-pointer text-qblacktext"
                      }
                    >
                      <span>About</span>
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        "flex items-center text-sm font-600 cursor-pointer text-qblacktext"
                      }
                    >
                      <span>Blog</span>
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        "flex items-center text-sm font-600 cursor-pointer text-qblacktext"
                      }
                    >
                      <span>Contact</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="become-seller-btn">
              <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <span className="text-sm font-600">Become a Seller</span>
                  <span>
                    <Star />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
