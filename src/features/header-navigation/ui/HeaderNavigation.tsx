import Link from 'next/link';
import { headerLinks } from '../model/links';
import HeaderMore from './header-more/HeaderMore';
import s from './HeaderNavigation.module.css';
import Button from '@/shared/ui/button/Button';
import Image from 'next/image';
import BurgerButton from './header-burger-button/BurgerButton';
import Sidebar from './sidebar/Sidebar';
const HeaderNavigation = () => {
  return (
    <>
      <nav className={s.navDesktop}>
        <div style={{ display: 'flex', maxHeight: '60px', justifyContent: 'center' }}>
          <ul className={s.headerLinksMain}>
            {headerLinks.map((link) => (
              <li key={link}>
                <Link href="">{link}</Link>
              </li>
            ))}
          </ul>
          <HeaderMore variant='header more'/>
        </div>
        <div className={s.headerSign}>
          <Button variant="sign up">Записаться</Button>
          <Link href="">
            <Image src="/user.svg" alt="user" width={44} height={44} />
          </Link>
        </div>
      </nav>
      <nav className={s.navMobile}>
        <Button variant="sign up">Записаться</Button>
        <BurgerButton />
      </nav>
      <Sidebar />
    </>
  );
};

export default HeaderNavigation;
