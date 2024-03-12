import React from "react";
import BrandSection from "../BrandSection";
import ProductsAds from "../ProductsAds";
import Banner from "./Banner";
import DesignCardsSection from "../SectionStyles/DesignCardsSection";
import datas from "../../mock_data/products.json";
import CampaignCountDown from "./CampaignCountDown";
import NewArrival from "../SectionStyles/NewArrival";
import PopularSales from "../SectionStyles/PopularSales";
import Layout from "../Layout";
import DiscountBanner from "./DiscountBanner";
import ServiceBanner from "./ServiceBanner";

function Index() {
  const { products } = datas;
  return (
    <Layout childrenClasses=" pt-0">
      <Banner className="mb-[60px]" />
      <ServiceBanner/>
      <DesignCardsSection
        products={products.slice(16, 20)}
        sectionTitle="Trendy Design"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <BrandSection className="mb-[60px]" />
      <CampaignCountDown lastDate="2023-10-04 4:00:00" className="mb-[60px]" />
      <DesignCardsSection
        products={products.slice(20, 24)}
        sectionTitle="Feature Design"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <ProductsAds
        ads={[`${import.meta.env.VITE_PUBLIC_URL}/src/assets/images/ads-3.png`]}
        className="products-ads-section mb-[60px]"
      />
      <NewArrival
        sectionTitle="New Arrival"
        seeMoreUrl="/all-products"
        products={products.slice(16, 28)}
        className="mb-[60px]"
      />

      <PopularSales
        products={products.slice(16, 28)}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="mb-[120px]"
      />
      <DiscountBanner />
    </Layout>
  );
}

export default Index;
