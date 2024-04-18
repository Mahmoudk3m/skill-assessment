import clsx from "clsx";
import { useState } from "react";

export default function Selector({ onSelect }: { onSelect: (index: number) => void }) {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    onSelect(index);
  };

  return (
    <div className="w-screen flex overflow-hidden">
      <div className="flex-1 bg-steel-blue margin-auto">
        <div className="md:ml-16 flex flex-row">
          <button
            onClick={() => handleOptionSelect(0)}
            className={clsx(
              "text-xl uppercase p-4 font-bold",
              selectedOption === 0 ? "text-steel-blue  bg-light-gray underline" : "text-light-gray bg-steel-blue"
            )}
          >
            Mountain1
          </button>
          <button
            onClick={() => handleOptionSelect(1)}
            className={clsx(
              "text-xl uppercase p-4 font-bold",
              selectedOption === 1 ? "text-steel-blue  bg-light-gray underline" : "text-light-gray bg-steel-blue"
            )}
          >
            Mountain2
          </button>
        </div>
      </div>
    </div>
  );
}
