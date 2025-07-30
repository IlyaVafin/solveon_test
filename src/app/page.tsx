import Header from '@/widgets/header/ui/Header';
import styles from './page.module.css';
import SliderContainer from '@/features/hero-slider/ui/SliderContainer';


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <SliderContainer/>
    </div>
  );
}
