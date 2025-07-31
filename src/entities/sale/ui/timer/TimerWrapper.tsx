'use client';
import { useIsMobile } from '../../model/useIsMobile';
import CountdownTimer from './Timer';

const TimerWrapper = () => {
  const isMobile = useIsMobile();
  return <>{!isMobile && <CountdownTimer targetDate="2025-09-03T23:59:59" />}</>;
};

export default TimerWrapper;
