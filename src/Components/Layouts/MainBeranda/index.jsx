import { useState } from "react";
import main from "../../../Data/mainData.js";
import HeroSection from "./HeroSection.jsx";
import Card from "./Card.jsx";
import NavbarBeranda from "./NavbarBeranda.jsx";
import Cart from "../../Fragments/Cart/index.jsx";
import { useDispatch } from "react-redux";
import { addItemToCart, fetchCart } from "../../../redux/slices/cartSlices.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../../../redux/slices/courseSlices.js";


const MainBeranda = () => {
  const dispatch = useDispatch();
  const { heroHeader, mainHeader, heroFooter } = main;
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { entities, status: coursesStatus } = useSelector((state) => state.courses);
  const courses = Object.values(entities);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }
    if (isAuthenticated) {
      dispatch(fetchCart(isAuthenticated.userId));
    }
  }, [coursesStatus, isAuthenticated, dispatch]);
 
  const handleNavActive = (index) => {
    setActiveIndex(index);
  };

  const handleAddToCart = (courseId) => {
    if (isAuthenticated) {
      dispatch(addItemToCart({ userId: isAuthenticated.userId, courseId }));
    }
  }
  return (
    <main className="h-auto w-full flex flex-col px-5 xl:px-[120px]">
      {isAuthenticated.isLogin && <Cart />}

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
        <main className="w-full flex flex-wrap gap-5 xl:gap-5 justify-center">
          {courses.map((item) => (
            <Card
              key={item.id}
              cardImage={item.cardImage}
              cardTitle={item.cardTitle}
              cardDescription={item.cardDescription}
              trainerImage={item.trainerImage}
              trainer={item.trainer}
              trainerJob={item.trainerJob}
              trainerCompany={item.trainerCompany}
              cardRating={item.cardRating}
              cardPrice={item.cardPrice}
              onClick={() => handleAddToCart(item.ids)}
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
