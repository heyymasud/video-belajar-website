import { useState } from "react";
import Button from "../../Components/Elements/Button";
import Navbar from "../../Components/Layouts/Navbar";
import main from "../../Data/mainData";

const Beranda = () => {
  const { heroHeader, mainHeader } = main;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Navbar />
      <main className="h-screen w-full flex flex-col px-[120px]">
        <header
          className={`flex flex-col items-center w-full h-[400px] bg-[url('${heroHeader.image}')] bg-cover bg-center bg-no-repeat rounded-xl my-16`}
        >
          <section
            className={`flex flex-col items-center justify-center bg-[#000000CC] h-full w-full px-[140px] py-16 gap-6 text-white text-center rounded-xl`}
          >
            <h1 className="text-3xl xl:text-5xl font-bold font-pop">
              {heroHeader.title}
            </h1>
            <p>{heroHeader.subtitle}</p>
            <Button className="bg-primary-500 px-4">{heroHeader.button}</Button>
          </section>
        </header>
        <main className="flex flex-col gap-8">
          <header className="flex flex-col gap-[10px]">
            <h2 className="font-pop text-4xl font-semibold">
              {mainHeader.title}
            </h2>
            <p className="text-slate-500 text-base font-medium">
              {mainHeader.subtitle}
            </p>
          </header>
          <section className="font-medium">
            {mainHeader.navbar.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`pr-9 py-3 hover:text-tertiary-500 relative ${
                  activeIndex === index ? "text-tertiary-500" : "text-slate-500"
                }`}
                onClick={() => handleNavActive(index)}
              >
                {item}
                {activeIndex === index && (
                  <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-tertiary-500"></span>
                )}
              </button>
            ))}
          </section>
        </main>
      </main>
    </>
  );
};

export default Beranda;
