'use client';
import Sale from '@/entities/sale/ui/Sale';
import HeaderNavigation from '@/features/header-navigation/ui/HeaderNavigation';
import Image from 'next/image';
import s from './Header.module.css';
const Header = () => {
  return (
      <header>
        <Sale />
        <div className={s.headerContainer}>
          <div className={s.headerTitle}>
            <div className={s.headerTitleText}>
              <h1>Центр</h1>
              <p>лазерной медицины</p>
            </div>
            <Image src="/logo.webp" width={153} height={123} alt="logo" />
          </div>
          <HeaderNavigation />
        </div>
      </header>
  );
};

export default Header;
