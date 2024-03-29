import Cart from "../Cart";
import Star from "../svg/Star";
import SearchBox from "../SearchBox";

export default function Middlebar({ className }) {
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <a to="/">
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/src/assets/icons/logo-5.svg`}
                  alt="logo"
                />
              </a>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                <a to="/products-compaire">
                  <span>
                    <Star />
                  </span>
                </a>
                <span className="w-[18px] h-[18px] rounded-full bg-qh5-bwhite absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                  2
                </span>
              </div>
              <div className="favorite relative">
                <a to="/wishlist">
                  <span>
                    <Star />
                  </span>
                </a>
                <span className="w-[18px] h-[18px] rounded-full bg-qh5-bwhite absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                  1
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <a to="/cart">
                    <span>
                      <Star />
                    </span>
                  </a>
                  <span className="w-[18px] h-[18px] rounded-full bg-qh5-bwhite absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                    15
                  </span>
                </div>
                {/* <div className="fixed left-0 top-0 w-full h-full z-40"></div> */}
                {/* hidden group-hover:block" */}
                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                <a to="/profile">
                  <span>
                    <Star />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
