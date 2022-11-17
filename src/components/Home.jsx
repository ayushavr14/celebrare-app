import React from "react";
import bgImage from "../assets/Background.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Page1 from "../assets/Page1.jpg"
import Page2 from "../assets/Page2.jpg"
import Page3 from "../assets/Page3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";


const Home = () => {
  return (
    <div className="relative min-h-screen w-full px-5 pt-20">
      <div className="absolute inset-0 -z-30 mt-28 h-80 w-full  px-5 ">
        <div className="h-full w-full overflow-hidden rounded-3xl md:rounded-[50px]">
          <img className="h-full w-full object-cover" src={bgImage} alt="" />
        </div>
      </div>

      {/* card */}
      <div className="flex flex-col  items-center px-4 text-3xl md:px-8 md:text-4xl">
        <h1 className="mb-10 mt-16 text-white">Digital Card Details</h1>

        {/* white board */}
        <div className="grid w-full rounded-3xl border border-gray-600 bg-white px-14 py-7  transition-all duration-500 ease-in-out grid-cols-1 md:grid-cols-3 md:rounded-[40px] md:px-16">
          <div className="col-span-2 flex h-[400px] items-center justify-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper h-[320px] w-[240px]"
            >
              <SwiperSlide>
                <div className="flex h-full items-center justify-center overflow-hidden  rounded-lg border-[4px] border-white ">
                  <img src={Page1} alt="page1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full items-center justify-center overflow-hidden  rounded-lg border-[4px] border-white ">
                  <img src={Page2} alt="page2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full items-center justify-center overflow-hidden rounded-lg border-[4px] border-white ">
                  <img src={Page3} alt="page3" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-span-1 flex flex-col-reverse items-center  justify-center gap-8 md:flex-col">
            <div className="flex flex-col ">
              <h1 className="mb-7 text-center">Card Title</h1>
              <div className="order-first mb-7 flex w-full justify-between text-2xl md:order-none">
                <h1>
                  $499 <span className="text-xl line-through">$2000</span>
                </h1>
                <h1 className="text-[rgb(69,225,69)]">75%off</h1>
              </div>
              <p className="text-base text-gray-400">
                Donec eu ornare mi. Sed finibus condimentum mauris, ut dictum
                eros maximus vitae. Nullam condimentum tortor ac elit feugiat
                iaculis. Aenean mauris nisl, blandit.
              </p>
            </div>
            <div className="w-full cursor-pointer rounded-full bg-black py-4 text-center text-xl text-white transition-all duration-500 ease-in-out hover:scale-105 md:rounded-lg">
              Try this Card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
