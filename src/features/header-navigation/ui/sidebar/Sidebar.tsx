'use client';

import Button from '@/shared/ui/button/Button';
import { useContextSidebar } from '../../model/SidebarContext';
import s from './Sidebar.module.css';
import Image from 'next/image';
import { headerLinks } from '../../model/links';
import Link from 'next/link';
import HeaderMore from '../header-more/HeaderMore';
const Sidebar = () => {
  const { closeSidebar, open } = useContextSidebar();
  return (
    <>
      <div className={`${s.overlay} ${open ? s.overlayShow : s.overlayHide}`}></div>
      <aside className={`${s.sidebar} ${open ? s.show : s.hide}`}>
        <header className={s.sidebarHeader}>
          <p className={s.sidebarTitle}>Центр лазерной медицины</p>
          <Button style={{borderRadius: '50%'}}  onClick={closeSidebar} variant="black button">
            <Image src="/close.svg" alt="close-button" width={32} height={32} />
          </Button>
        </header>
        <nav className={s.sidebarNav}>
          <ul className={s.sidebarLinks}>
            {headerLinks.map((link) => (
              <li key={link}>
                <Link href="">{link}</Link>
              </li>
            ))}
          </ul>
          <HeaderMore variant="sidebar more" />
        </nav>
        <div className={s.sidebarButtons}>
          <button className={s.accountButton}>Личный кабинет</button>
          <Button variant="sign up">Записаться</Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
