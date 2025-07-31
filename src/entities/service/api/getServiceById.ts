import { sliderPhoto, sliderPhotoById } from '@/shared/types';

export const getServiceById = async (service_id: string): Promise<sliderPhotoById> => {
  try {
    const res = await fetch(`https://boringapi.com/api/v1/photos/${service_id}`);
    if (!res.ok) throw new Error('Something wrong to get service by ID!');
    return await res.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
};
