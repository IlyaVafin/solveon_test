import { getSliderPhotos } from '../api/getSliderPhotos';
import Slider from './Slider';

const SliderContainer = async () => {
  const sliderPhotos = await getSliderPhotos();
  console.log(sliderPhotos);

  return (
    <div>
      <Slider data={sliderPhotos} />
    </div>
  );
};

export default SliderContainer;
