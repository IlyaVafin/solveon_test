'use client';
import { useTimer } from '../../model/useTimer';
import s from './Timer.module.css';
const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const { isClient, timeLeft } = useTimer(targetDate);

  if (!timeLeft) {
    return <div>Время истекло!</div>;
  }

  return (
    <div>
      {isClient ? (
        <div className={s.timer}>
          <span>{timeLeft.days} дня </span>
          <span>{timeLeft.hours.toString().padStart(2, '0')}:</span>
          <span>{timeLeft.minutes.toString().padStart(2, '0')}:</span>
          <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default CountdownTimer;
