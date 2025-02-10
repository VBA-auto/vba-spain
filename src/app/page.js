import React from "react";
import HeroSpain from "./components/Spain pages/HeroSpain";
import ProduitsSpain from "./components/Spain pages/ProduitsSpain";
import ContactSpain from "./components/Spain pages/ContactSpain";
import SubHeaderSpain from "./components/Spain pages/SubHeaderSpain";
import HeaderSpain from "./components/Spain pages/HeaderSpain";
import FooterSpain from "./components/Spain pages/FooterSpain";

const page = () => {
  return (
    <div>
      <SubHeaderSpain />
      <HeaderSpain />
      <HeroSpain />
      <ProduitsSpain />
      <ContactSpain />
      <FooterSpain />
    </div>
  );
};

export default page;
