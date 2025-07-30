import Image from 'next/image';
import s from './Sale.module.css';
const Sale = () => {
  return (
    <div className={s.sale}>
      <p>Скидка на Лазерную коррекцию до 60 %</p>
      <p className={s.saleTimer}>3 дня 18:04:29</p>
      <Image src="/icon-arrow.svg" alt="icon-arrow" width={24} height={24} />
    </div>
  );
};

export default Sale;
