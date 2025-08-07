import React, { createContext, useContext, useState } from 'react';

export const SharedContext = createContext({
  value: 0,
  setValue: () => {}
});

export function SharedContextProvider({children}) {
    const [value, setValue] = useState(0);
    
    const updateSharedState = (newValue) => {
    setValue(newValue);
  };
    console.log("TestContextProvider initialized with value:", value);
    return (
        <SharedContext.Provider value={{value, updateSharedState}}>
            {children}
        </SharedContext.Provider>
    );
}

export const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error('useSharedAppContext must be used within an AppContextProvider');
  }
  return context;
};