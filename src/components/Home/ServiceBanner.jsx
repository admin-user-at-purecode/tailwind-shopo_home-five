import Star from "../svg/Star";

export default function ServiceBanner() {
  return (
    <div className="container-x mx-auto mb-[60px]">
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: `url(/src/assets/images/service-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="best-services w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-col lg:justify-around lg:items-start lg:h-[300px] px-10 lg:py-0 py-10"
      >
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span><Star/></span>
            </div>
            <div>
              <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                Free Shipping
              </p>
              <p className="text-sm text-qgray text-white">
                When ordering over $100
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <Star />
              </span>
            </div>
            <div>
              <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                Free Return
              </p>
              <p className="text-sm text-qgray text-white">
                Get Return within 30 days
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <Star />
              </span>
            </div>
            <div>
              <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                Secure Payment
              </p>
              <p className="text-sm text-qgray text-white">
                100% Secure Online Payment
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <Star />
              </span>
            </div>
            <div>
              <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                Best Quality
              </p>
              <p className="text-sm text-qgray text-white">
                Original Product Guarenteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
