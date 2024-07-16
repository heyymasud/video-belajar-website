import { useState } from "react";
import Button from "../../Components/Elements/Button";
import Navbar from "../../Components/Layouts/Navbar";
import main from "../../Data/mainData";
import footer from "../../Data/footer";

const Beranda = () => {
  const { heroHeader, mainHeader, mainCard, heroFooter } = main;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Navbar />
      <main className="h-auto w-full flex flex-col px-5 xl:px-[120px]">
        <header
          className={`relative flex flex-col items-center w-full h-[400px] rounded-xl my-7 xl:my-16 overflow-hidden`}
        >
          <img
            className="w-full h-full absolute object-cover -z-10"
            src={heroHeader.image}
            alt="hero-header"
          />
          <section
            className={`flex flex-col items-center justify-center bg-[#000000CC] h-full w-full px-5 md:px-[140px] py-16 gap-6 text-white text-center rounded-xl`}
          >
            <section className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold font-pop">
                {heroHeader.title}
              </h1>
              <p className="font-medium text-sm md:text-base">
                {heroHeader.subtitle}
              </p>
            </section>
            <Button className="bg-primary-500 px-4 text-xs md:text-base">
              {heroHeader.button}
            </Button>
          </section>
        </header>
        <main className="flex flex-col gap-6 xl:gap-8">
          <header className="flex flex-col gap-[10px]">
            <h3 className="font-pop text-2xl xl:text-4xl font-semibold">
              {mainHeader.title}
            </h3>
            <p className="text-slate-500 text-sm xl:text-base font-medium">
              {mainHeader.subtitle}
            </p>
          </header>
          <section className="font-medium text-sm xl:text-base">
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
          <main className="w-full flex flex-wrap gap-5 xl:gap-6">
            {mainCard.map((item, index) => (
              <div
                key={index}
                className="w-full xl:w-[32%] h-auto bg-white rounded-xl border border-[#3A35411F] p-4 xl:p-5 flex flex-col gap-2 xl:gap-4"
              >
                <section className="flex flex-row xl:flex-col gap-3 xl:gap-4 items-center xl:items-stretch">
                  <header>
                    <img
                      src={item.cardImage}
                      alt={item.cardTitle}
                      className="rounded-xl w-[82px] h-[82px] xl:w-full xl:h-[193px] object-cover object-center"
                    />
                  </header>
                  <section className="flex flex-col gap-2 xl:gap-4 flex-1">
                    <section className="flex flex-col gap-2">
                      <h6 className="font-pop text-base xl:text-lg font-semibold">
                        {item.cardTitle}
                      </h6>
                      <p className="text-slate-500 text-base font-medium hidden xl:block">
                        {item.cardDescription.length > 79
                          ? `${item.cardDescription.substring(0, 79)}...`
                          : item.cardDescription}
                      </p>
                    </section>
                    <section className="flex gap-2 xl:gap-[10px] items-center">
                      <img
                        src={item.trainerImage}
                        alt={item.trainer}
                        className="w-9 xl:w-[40px] h-9 xl:h-[40px] rounded-xl"
                      />
                      <section>
                        <h3 className="text-sm xl:text-lg font-medium">
                          {item.trainer}
                        </h3>
                        <p className=" text-slate-500 text-xs xl:text-base font-normal xl:font-medium">
                          {item.trainerJob}
                          <span className="hidden xl:inline">di </span>
                          <span className="hidden xl:inline font-bold">
                            {item.trainerCompany}
                          </span>
                        </p>
                      </section>
                    </section>
                  </section>
                </section>
                <footer className="flex justify-between">
                  <section className="flex gap-2 items-center">
                    <img src="./img/rating.png" alt="rating" />
                    <p className="text-xs xl:text-sm text-slate-500 font-medium underline">
                      {item.cardRating}
                    </p>
                  </section>
                  <p className="text-primary-500 font-semibold text-xl xl:text-2xl">
                    {item.cardPrice}
                  </p>
                </footer>
              </div>
            ))}
          </main>
        </main>
        <section
          className={`relative w-full h-[400px] rounded-md my-16 overflow-hidden`}
        >
          <img
            className="w-full h-full absolute object-cover -z-10"
            src={heroFooter.image}
            alt="hero-footer"
          />
          <section
            className={`flex flex-col justify-center bg-[#000000CC] h-full w-full px-[337px] gap-10 text-white text-center rounded-xl`}
          >
            <section className="flex flex-col gap-1">
              <h3 className="font-medium text-lg text-slate-300">
                {heroFooter.titleSection}
              </h3>
              <section className="flex flex-col gap-3">
                <h2 className="font-pop font-semibold text-[32px]">
                  {heroFooter.title}
                </h2>
                <p>{heroFooter.subtitle}</p>
              </section>
            </section>
            <section className="relative">
              <input
                className="rounded-xl px-8 py-[18px] w-full"
                type="text"
                placeholder="Masukkan Emailmu"
              />
              <Button className="bg-secondary-500 px-6 absolute top-1/2 right-2 -translate-y-1/2">
                {heroFooter.button}
              </Button>
            </section>
          </section>
        </section>
      </main>
      <footer className="flex flex-col w-full h-auto px-[120px] py-[60px] bg-white gap-5">
        <section className="flex justify-between">
          <section className="flex flex-col gap-4 w-[30%]">
            <img className="w-[204px] h-14" src={footer.logo} alt="logo" />
            <section className="flex flex-col gap-3">
              <p className="text-lg font-bold">{footer.motto}</p>
              <p>{footer.address}</p>
              <p>{footer.phone}</p>
            </section>
          </section>
          <section className="flex gap-12">
            <section className="flex flex-col gap-4">
              <p className="font-bold">Kategori</p>
              <ul className="flex flex-col gap-3">
                {footer.kategori.map((item, index) => (
                  <li className="text-slate-500 font-medium" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-4">
              <p className="font-bold">Perusahaan</p>
              <ul className="flex flex-col gap-3">
                {footer.perusahaan.map((item, index) => (
                  <li className="text-slate-500 font-medium" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-4">
              <p className="font-bold">Komunitas</p>
              <ul className="flex flex-col gap-3">
                {footer.komunitas.map((item, index) => (
                  <li className="text-slate-500 font-medium" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
        <section className="pt-8 border-b border-slate-300" />
        <section className="flex justify-between items-center">
          <p className="text-slate-500 font-medium">{footer.copyright}</p>
          <section className="flex gap-4">
            {footer.socialMedia.map((item, index) => (
              <img
                className="cursor-pointer"
                src={item}
                alt="social media"
                key={index}
              />
            ))}
          </section>
        </section>
      </footer>
    </>
  );
};

export default Beranda;
