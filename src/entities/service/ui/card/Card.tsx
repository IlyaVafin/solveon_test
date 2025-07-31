'use client';

import { SliderPhotos } from '@/shared/types';
import Image from 'next/image';
import { useState } from 'react';
import s from './Card.module.css';
import Link from 'next/link';

const Card = ({ data }: { data: SliderPhotos }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <>
      {data.photos.map((photo, index) => (
        <li key={photo.id}>
          {activeCard !== index && (
            <article className={s.serviceCardUnActive}>
              <div className={s.serviceContent}>
                <p className={s.serviceNumber}>{index + 1}</p>
                <div className={s.serviceCardInfo}>
                  <Image
                    className={s.serviceImage}
                    src={photo.url}
                    alt={photo.title}
                    width={92}
                    height={92}
                  />

                  <Link href={`service/${photo.id}`} className={s.serviceTitle}>
                    {photo.title}
                  </Link>
                </div>
                <button onClick={() => setActiveCard(index)}>...</button>
              </div>
            </article>
          )}
          {activeCard === index && (
            <article className={s.serviceCardActive}>
              <div className={`${s.serviceContentActive} ${s.desktop}`}>
                <Link href={`service/${photo.id}`} className={s.activeTitle}>
                  {photo.title}
                </Link>
                <Image
                  className={s.serviceActiveCardImage}
                  src={photo.url}
                  alt={photo.title}
                  width={361}
                  height={361}
                />
                <p className={s.activeDescription}>{photo.description}</p>
              </div>
              <div className={`${s.tablet} ${s.serviceCardActive}`}>
                <div className={s.tabletCardActive}>
                  <Link href={`service/${photo.id}`} className={s.activeTitle}>
                    {photo.title}
                  </Link>
                  <p className={s.activeDescription}>{photo.description}</p>
                </div>
                <Image
                  className={s.serviceActiveCardImage}
                  src={photo.url}
                  alt={photo.title}
                  width={300}
                  height={300}
                />
              </div>
            </article>
          )}
        </li>
      ))}
    </>
  );
};

export default Card;
