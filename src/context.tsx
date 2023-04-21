import React, { useContext, useState } from "react";
// import data from "./data";


// const INITIAL_STATE = {
//   searchResults: [],
// }

interface IProps {
  children: JSX.Element | JSX.Element[]; // React.ReactNode

}
export type ContextType = {
  menuIsOpen: boolean;
  setMenuIsOpen: any;
}
const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider = ({ children }: IProps) => {
  // const [searchResults, setSearchResults] = useState([]);

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)



  return (
    <AppContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
