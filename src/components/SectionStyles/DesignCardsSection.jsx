import DataIteration from "../DataIteration";
import ViewMoreTitle from "../ViewMoreTitle";
import ProductCardTwo from "../Cards/ProductCardTwo";

export default function DesignCardsSection({
  className,
  sectionTitle,
  seeMoreUrl,
  products = [],
}) {
  return (
      <div
          data-aos="fade-up"
          className={`section-style-one ${className || ""}`}
      >
          <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
              <div className="products-section w-full">
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                      <DataIteration
                          datas={products}
                          startLength={0}
                          endLength={products.length}
                      >
                          {({ datas }) => (
                              <div key={datas.id} className="item">
                                  <ProductCardTwo datas={datas} />
                              </div>
                          )}
                      </DataIteration>
                  </div>
              </div>
          </ViewMoreTitle>
      </div>
  );
}
