import { useState } from "react";
import footer from "../../../Data/footer";
import { IoIosArrowForward } from "react-icons/io";

const MainFooter = () => {
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);

  return (
    <footer className="flex flex-col w-full h-auto p-5 xl:px-[120px] xl:py-[60px] bg-white gap-4 xl:gap-5">
      <section className="flex xl:justify-between flex-col xl:flex-row gap-4 xl:gap-0">
        <section className="flex flex-col gap-4 xl:w-[30%]">
          <img className="xl:w-[204px] w-40" src={footer.logo} alt="logo" />
          <section className="flex flex-col gap-2 xl:gap-3">
            <p className="text-base xl:text-lg font-bold">{footer.motto}</p>
            <p className="text-sm xl:text-base">{footer.address}</p>
            <p className="text-sm xl:text-base">{footer.phone}</p>
          </section>
        </section>
        <section className="flex gap-3 xl:gap-12 xl:flex-row flex-col">
          <section className="flex flex-col gap-4">
            <button
              type="button"
              className="flex justify-between items-center"
              onClick={() => setDropDown1(!dropDown1)}
            >
              <span className="font-bold ">Kategori</span>
              <IoIosArrowForward className="xl:hidden" />
            </button>
            <ul
              className={`xl:flex flex-col gap-3 ${
                dropDown1 ? "flex" : "hidden"
              }`}
            >
              {footer.kategori.map((item, index) => (
                <li className="text-slate-500 font-medium cursor-pointer" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <button
              type="button"
              className="flex justify-between items-center"
              onClick={() => setDropDown2(!dropDown2)}
            >
              <span className="font-bold ">Perusahaan</span>
              <IoIosArrowForward className="xl:hidden" />
            </button>
            <ul className={`xl:flex flex-col gap-3 ${
                dropDown2 ? "flex" : "hidden"
              }`}>
              {footer.perusahaan.map((item, index) => (
                <li className="text-slate-500 font-medium cursor-pointer" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-4">
          <button
              type="button"
              className="flex justify-between items-center"
              onClick={() => setDropDown3(!dropDown3)}
            >
              <span className="font-bold ">Komunitas</span>
              <IoIosArrowForward className="xl:hidden" />
            </button>
            <ul className={`xl:flex flex-col gap-3 ${
                dropDown3 ? "flex" : "hidden"
              }`}>
              {footer.komunitas.map((item, index) => (
                <li className="text-slate-500 font-medium cursor-pointer" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <section className="xl:pt-8 border-b border-slate-300" />
      <section className="xl:relative flex xl:justify-between xl:items-center flex-col xl:flex-row gap-3 xl:gap-0">
        <section className="xl:absolute xl:right-0 flex gap-4">
          {footer.socialMedia.map((item, index) => (
              <img
              className="cursor-pointer"
              src={item}
              alt="social media"
              key={index}
            />
        ))}
        </section>
        <p className="text-slate-500 font-medium">{footer.copyright}</p>
      </section>
    </footer>
  );
};

export default MainFooter;
