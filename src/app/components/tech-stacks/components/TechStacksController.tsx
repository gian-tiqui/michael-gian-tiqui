import React, { ReactNode } from "react";
import { BiCollapse, BiExpand, BiMinusCircle } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { MdAllOut } from "react-icons/md";

interface TTControllerInterface {
  increaseItems: () => void;
  decreaseItems: () => void;
  showAllItems: () => void;
  collapseItems: () => void;
}

interface IconInterface {
  word: string;
  icon: ReactNode;
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

  const iconStyle = "text-3xl text-white dark:text-black";
  const words: IconInterface[] = [
    {
      icon: <CgAdd className={iconStyle} />,
      word: "+3",
    },
    {
      icon: <BiMinusCircle className={iconStyle} />,
      word: "-3",
    },
    {
      icon: <BiExpand className={iconStyle} />,
      word: "All",
    },
    {
      icon: <BiCollapse className={iconStyle} />,
      word: "Reset",
    },
  ];

  const positioning: string[] = [
    "justify-end items-end pr-5 pb-5",
    "justify-start items-end pl-5 pb-5",
    "justify-end items-start pr-5 pt-5",
    "justify-start items-start pl-5 pt-5",
  ];

  return (
    <div className="grid grid-cols-2 gap-1 grid-rows-2 w-48 h-48 mx-auto rounded-full p-3">
      {controllers.map((controller, index) => (
        <div
          onClick={controller}
          className={`w-full h-full bg-neutral-800 dark:bg-white flex ${positioning[index]} ${rounding[index]}`}
          key={index}
        >
          <p className="font-mono text-white dark:text-black text-sm font-extrabold">
            {words[index].icon}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechStacksController;
