import { SliderPhotos } from '../../../shared/types';

export const getSliderPhotos = async (): Promise<SliderPhotos> => {
  try {
    const res = await fetch('https://boringapi.com/api/v1/photos/?limit=5');
    if (!res.ok) throw new Error('Something wrong!');
    return await res.json();
  } catch (e) {
    throw e;
  }
};
