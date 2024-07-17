import { useState } from "react";
import main from "../../../Data/mainData.js";
import HeroSection from "../../Fragments/HeroSection/index.jsx";
import Card from "../../Fragments/Card/index.jsx";
import NavbarBeranda from "../../Elements/NavbarBeranda/index.jsx";

const MainBeranda = () => {
  const { heroHeader, mainHeader, mainCard, heroFooter } = main;
  const [activeIndex, setActiveIndex] = useState(0);
 
  const handleNavActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <main className="h-auto w-full flex flex-col px-5 xl:px-[120px]">
      <HeroSection
        image={heroHeader.image}
        title={heroHeader.title}
        subtitle={heroHeader.subtitle}
        button={heroHeader.button}
        isFooter={false}
      />
      <main className="flex flex-col text-dark-primary gap-6 xl:gap-8">
        <header className="flex flex-col gap-[10px]">
          <h3 className="font-pop text-2xl xl:text-4xl font-semibold">
            {mainHeader.title}
          </h3>
          <p className="text-dark-secondary text-sm xl:text-base font-medium">
            {mainHeader.subtitle}
          </p>
        </header>
        <NavbarBeranda 
        navbar={mainHeader.navbar}
        activeIndex={activeIndex}
        handleNavActive={handleNavActive}
        />
        <main className="w-full flex flex-wrap gap-5 xl:gap-6">
          {mainCard.map((item, index) => (
            <Card
              key={index}
              cardImage={item.cardImage}
              cardTitle={item.cardTitle}
              cardDescription={item.cardDescription}
              trainerImage={item.trainerImage}
              trainer={item.trainer}
              trainerJob={item.trainerJob}
              trainerCompany={item.trainerCompany}
              cardRating={item.cardRating}
              cardPrice={item.cardPrice}
            />
          ))}
        </main>
      </main>
      <HeroSection
        image={heroFooter.image}
        title={heroFooter.title}
        subtitle={heroFooter.subtitle}
        button={heroFooter.button}
        isFooter={true}
        titleSection={heroFooter.titleSection}
      />
    </main>
  );
};

export default MainBeranda;
