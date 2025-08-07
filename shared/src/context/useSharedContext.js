import React, { createContext, useContext, useState } from 'react';
import { SharedContext } from './SharedContextProvider';

export const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error('useSharedAppContext must be used within an AppContextProvider');
  }
  return context;
};