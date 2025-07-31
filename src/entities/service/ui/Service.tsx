import Button from '@/shared/ui/button/Button';
import s from './Service.module.css';
import { getAllServices } from '../api/getAllServices';
import Card from './card/Card';
import Image from 'next/image';
const Service = async () => {
  const servicesData = await getAllServices();
  console.log(servicesData);

  return (
    <section className={s.service}>
      <header className={s.serviceHeader}>
        <ul>
          <li>
            <div className={s.circle}></div>
            ПОПУЛЯРНЫЕ УСЛУГИ
          </li>
        </ul>
        <Button variant="more services">
          больше услуг
          <span className={s.buttonImage}>
            <Image width={32} height={32} src="/icon-arrow-blue.svg" alt="more-icon" />
          </span>
        </Button>
      </header>
      <ul className={s.cards}>
        <Card data={servicesData} />
      </ul>
    </section>
  );
};

export default Service;
