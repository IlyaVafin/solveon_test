'use client';
import Link from 'next/link';
import { more } from '../../model/links';
import { useShowLinks } from '../../model/useShowLinks';
import s from './HeaderMore.module.css';
import Image from 'next/image';

const HeaderMore = ({ variant }: { variant: 'header more' | 'sidebar more' }) => {
  const { show, showLinks, hideLinks, hideLinksOnBlur } = useShowLinks();

  return (
    <div onBlur={hideLinksOnBlur} className={s.headerMore}>
      <button
        aria-haspopup="true"
        aria-expanded={show}
        onFocus={showLinks}
        className={s.moreLink}
        onMouseEnter={showLinks}
        
      >
        Еще:
      </button>
      <ul
        onMouseLeave={hideLinks}
        className={`${variant === 'header more' ? s.headerMoreList : s.headerMoreSidebar} ${show ? s.show : s.hide}`}
        role="menu"
      >
        {more.map((moreLink) => {
          const isSpecialLink = moreLink === 'справочник болезней' && variant !== 'sidebar more';
          return (
            <li role="menu-item" key={moreLink}>
              <Link className={isSpecialLink ? s.specialLink : undefined} href="">
                {isSpecialLink && (
                  <>
                    <span>{moreLink}</span>{' '}
                    <Image
                      width={24}
                      height={24}
                      src="/icon-arrow-black.svg"
                      alt="icon-arrow-black"
                    />
                  </>
                )}
                {!isSpecialLink && moreLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMore;
