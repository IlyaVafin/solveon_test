import { SliderPhotos } from '@/shared/types';

export const getAllServices = async (): Promise<SliderPhotos> => {
  try {
    const res = await fetch('https://boringapi.com/api/v1/photos?limit=15');
    if (!res.ok) throw new Error('Something wrong, cannot get photos!');
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};
