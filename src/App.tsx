import "swiper/swiper-bundle.css";

import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import { useState } from "react";
import Main from "./pages/Main";
import History from "./pages/History";
import Mountains from "./pages/Mountains";
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";
export default function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <>
      <main className="container ml-auto mr-auto flex flex-col items-center ">
        <Main />
        <Navbar separator />
        <History />
        <Mountains />
        <Selector onSelect={handleSelect} />
        <Schedule selectedOption={selectedOption} />
      </main>
      <Footer />
    </>
  );
}
