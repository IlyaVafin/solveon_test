'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderPhotos } from '../types';
import s from './Slider.module.css';
const Slider = ({ data }: { data: SliderPhotos }) => {
  return (
    <div className={s.sliderServices}>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        className={s.mySwiper}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {data.photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <p className={s.photoTitle}>{photo.title}</p>
            <Image src={photo.url} alt={photo.title} width={photo.width} height={photo.height} />
            <Link className={s.servicesMore} href={`services/${photo.id}`}>
              <span>Подробнее</span>
              <Image src="/icon-arrow-blue.svg" alt="icon-arrow-more" width={300} height={300} />
            </Link>
            <div className={s.linksInfo}>
              <Link href="">Вопросы</Link>
              <Link href="">Больше акций</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
