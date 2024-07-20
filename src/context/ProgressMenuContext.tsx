

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'

interface ProgressMenuContextType {
  isProgressMenuOpen: boolean;
  openProgressMenu: () => void;
  closeProgressMenu: () => void;
}

const defaultContextValue: ProgressMenuContextType = {
  isProgressMenuOpen: false,
  openProgressMenu: () => {
    // Implementation pending
  }, 
  closeProgressMenu: () => {
    // Implementation pending
  } 
};

// Create a Context with a default value
const ProgressMenuContext = createContext<ProgressMenuContextType>(defaultContextValue);

export const ProgressMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isProgressMenuOpen, setIsProgressMenuOpen] = useState<boolean>(false);

  const openProgressMenu = () => setIsProgressMenuOpen(true);
  const closeProgressMenu = () => setIsProgressMenuOpen(false);

  return (
    <ProgressMenuContext.Provider value={{ isProgressMenuOpen, openProgressMenu, closeProgressMenu }}>
      {children}
    </ProgressMenuContext.Provider>
  );
};

export const useProgressMenu = () => useContext(ProgressMenuContext);