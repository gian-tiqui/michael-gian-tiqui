import React from "react";

interface TTControllerInterface {
  increaseItems: () => void;
  decreaseItems: () => void;
  showAllItems: () => void;
  collapseItems: () => void;
}

type TechStackController = () => void;

const TechStacksController: React.FC<TTControllerInterface> = ({
  increaseItems,
  decreaseItems,
  showAllItems,
  collapseItems,
}) => {
  const controllers: TechStackController[] = [
    increaseItems,
    decreaseItems,
    showAllItems,
    collapseItems,
  ];
  const rounding: string[] = [
    "rounded-ss-full",
    "rounded-se-full",
    "rounded-es-full",
    "rounded-ee-full",
  ];
  const words: string[] = ["+3", "-3", "All", "Reset"];
  const positioning: string[] = [
    "justify-end items-end pr-7 pb-7",
    "justify-start items-end pl-7 pb-7",
    "justify-end items-start pr-7 pt-7",
    "justify-start items-start pl-5 pt-7",
  ];

  return (
    <div className="grid grid-cols-2 gap-1 grid-rows-2 w-52 h-52 mx-auto rounded-full p-3">
      {controllers.map((controller, index) => (
        <div
          onClick={controller}
          className={`w-full h-full bg-neutral-900 dark:bg-white flex ${positioning[index]} ${rounding[index]}`}
          key={index}
        >
          <p className="font-mono text-white dark:text-black text-sm font-extrabold">
            {words[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechStacksController;
