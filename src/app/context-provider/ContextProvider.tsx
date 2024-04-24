"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ModeInterface {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ModeContext = createContext<ModeInterface>({
  darkMode: false,
  setDarkMode: () => {},
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ModeContext.Provider
      value={{ darkMode: darkMode, setDarkMode: setDarkMode }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export default ContextProvider;
