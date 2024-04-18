import "swiper/swiper-bundle.css";

import LA from "./assets/LA.png";
import History from "./assets/History.png";
import Mountain1 from "./assets/Mountain1.png";
import Navbar from "./components/Navbar";
import Label from "./components/Label";
import Selector from "./components/Selector";
import Logo from "./assets/Logo";
import Card from "./components/Card";
import { useState } from "react";
import Carousel from "./components/Carousel";
export default function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <>
      <main className="container ml-auto mr-auto flex flex-col items-center ">
        <section className="w-full h-screen flex flex-row items-start justify-center">
          <Navbar />
          <div className="background">
            <img src={LA} alt="" />
          </div>
        </section>
        <Navbar separator />
        <section className="h-screen flex flex-col justify-between">
          <div className="mt-16">
            <Label text={"History"} number={1} />
            <p className="text-sm md:text-lg oswald text-steel-blue ml-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit perspiciatis voluptas alias impedit
              blanditiis, nobis quasi quibusdam fugiat, illo libero consequuntur? Nesciunt, suscipit? Fugit, minima ab.
              Animi, illo nihil, ab minus dignissimos ipsa nemo perspiciatis, suscipit ducimus sapiente fugiat vitae.
              Odio temporibus blanditiis, itaque minima earum, dolorem sit sunt aspernatur at ipsum voluptatum amet
              culpa tempore exercitationem pariatur a quaerat soluta vitae! Eius amet, doloremque ratione cupiditate
              natus odit esse.
            </p>
          </div>
          <div className="w-screen flex justify-center items-center bg-steel-blue bg-opacity-50">
            <Carousel />
          </div>
          <div className="background">
            <img src={History} alt="" />
          </div>
        </section>
        <section className="w-full">
          <div className="flex flex-col md:flex-row items-center p-4">
            <Label text={"Climb"} number={2} />
            <p className="text-steel-blue text-sm md:text-lg ml-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam veniam repellat commodi labore odit
              ratione libero distinctio? Animi quos pariatur necessitatibus deleniti, ullam modi non dolores molestiae
              recusandae in!
            </p>
          </div>
        </section>
        <div className="w-screen flex overflow-hidden">
          <Selector onSelect={handleSelect} />
        </div>
        <section className="w-screen h-auto flex flex-row items-start justify-start">
          <img src={Mountain1} alt="" className="w-full" />
          <div className="w-full absolute">
            <Card selectedOption={selectedOption} />
          </div>
        </section>
      </main>
      <footer className="w-screen flex flex-row justify-center items-center bg-steel-blue p-4 gap-8 md:gap-96">
        <div className="flex flex-row items-center justify-center">
          <div style={{ opacity: 0.3 }}>
            <Logo />
          </div>
          <div className="flex flex-col justify-center items-center ml-4">
            <h1 className="text-base lg:text-2xl font-bold  uppercase" style={{ lineHeight: 0, color: "#63769d" }}>
              LosAngeles
            </h1>
            <h2 className="text-base lg:text-2xl font-bold  uppercase mt-5" style={{ lineHeight: 0, color: "#63769d" }}>
              Mountains
            </h2>
          </div>
        </div>
        <p className="text-sm lg:text-xl font-bold uppercase" style={{ color: "#63769d" }}>
          copyright 2016. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
