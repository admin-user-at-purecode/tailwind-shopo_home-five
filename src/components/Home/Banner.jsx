import { useRef } from "react";
import SliderCom from "../SliderCom";
import Star from "../svg/Star";

export default function Banner({ className }) {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`hero-slider-wrapper w-full xl:h-[733px] h-[500px] hero-slider-wrapper ${
          className || ""
        }`}
      >
        <div className="main-wrapper w-full h-full">
          <div className=" xl:h-full mb-20 xl:mb-0  w-full relative">
            <SliderCom settings={settings} selector={sliderRef}>
              <div className="item w-full xl:h-[733px] h-[500px]">
                <div
                  className="w-full h-full relative md:bg-center"
                  style={{
                    backgroundImage: `url('/src/assets/images/banner-5.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-x mx-auto flex items-center  h-full">
                    <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
                      <div className="md:w-[626px] w-full">
                        <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                          Fashion Hunt
                        </p>
                        <h1 className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">
                          Shop the Hottest Brands and Designs at Shop0
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item w-full xl:h-[733px] h-[500px]">
                <div
                  className="w-full h-full relative md:bg-center"
                  style={{
                    backgroundImage: `url('/src/assets/images/banner-5.1.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-x mx-auto flex items-center  h-full">
                    <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
                      <div className="md:w-[626px] w-full">
                        <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                          Fashion Hunt
                        </p>
                        <h1 className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">
                          Shop the Hottest Brands and Designs at Shop0
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item w-full xl:h-[733px] h-[500px]">
                <div
                  className="w-full h-full relative md:bg-center"
                  style={{
                    backgroundImage: `url('/src/assets/images/banner-5.2.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-x mx-auto flex items-center  h-full">
                    <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
                      <div className="md:w-[626px] w-full">
                        <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                          Fashion Hunt
                        </p>
                        <h1 className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">
                          Shop the Hottest Brands and Designs at Shop0
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SliderCom>
          </div>
        </div>
      </div>
    </>
  );
}
