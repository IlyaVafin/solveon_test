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
          <div>
            <Image src="/logo.webp" width={120} height={120} alt="logo" />
          </div>
        </div>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
