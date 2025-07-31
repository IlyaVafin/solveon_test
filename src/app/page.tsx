import SliderContainer from '@/features/hero-slider/ui/SliderContainer';
import Header from '@/widgets/header/ui/Header';
import Services from '@/widgets/services/Services';
import styles from './page.module.css';
import { SidebarProvider } from '@/features/header-navigation/model/SidebarContext';

export default function Home() {
  return (
    <div className={styles.page}>
      <SidebarProvider>
      <Header />
      </SidebarProvider>
      <SliderContainer />
      <Services />
    </div>
  );
}
