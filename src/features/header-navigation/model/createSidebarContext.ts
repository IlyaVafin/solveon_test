import { createContext } from 'react';
interface ISidebarContext {
  open: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext | null>(null);
