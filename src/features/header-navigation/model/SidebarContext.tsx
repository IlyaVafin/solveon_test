'use client';
import { ReactNode, useContext, useState } from 'react';
import { SidebarContext } from './createSidebarContext';

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);

  return (
    <SidebarContext.Provider value={{ open, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useContextSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('Use context with provider');
  return context;
};
