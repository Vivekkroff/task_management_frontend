import React, { useContext } from "react";

import { createContext } from "react";

type Tab =  {
    id:number;
    name:string;
}


type ContextType = {
  currentTab: Tab | null;
  setCurrentTab: (tab: Tab) => void;
}


const userContext = createContext<any | null>(null);

export default userContext;


export const useuserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};