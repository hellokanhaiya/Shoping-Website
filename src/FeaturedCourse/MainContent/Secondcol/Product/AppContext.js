import React, { createContext, useState } from "react";

export const IndexContext = createContext();

export const IndexProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <IndexContext.Provider value={{ index, handleIncrement }}>
      {children}
    </IndexContext.Provider>
  );
};
