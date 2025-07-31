import Image from 'next/image';
import s from './Sale.module.css';
import TimerWrapper from './timer/TimerWrapper';

const Sale = () => {
  return (
    <div className={s.sale}>
      <p>Скидка на Лазерную коррекцию до 60 %</p>
      <TimerWrapper />
      <Image src="/icon-arrow.svg" alt="icon-arrow" width={24} height={24} />
    </div>
  );
};

export default Sale;
