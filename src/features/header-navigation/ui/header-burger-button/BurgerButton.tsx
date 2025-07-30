'use client';
import Image from 'next/image';
import s from './BurgerButton.module.css';
import { useContextSidebar } from '../../model/SidebarContext';
import Button from '@/shared/ui/button/Button';
const BurgerButton = () => {
  const { openSidebar } = useContextSidebar();
  return (
    <Button variant="black button" onClick={openSidebar} className={s.burgerButton}>
      <Image src="/burger-icon.svg" alt="burger-icon" width={15} height={15} />
    </Button>
  );
};
export default BurgerButton;
