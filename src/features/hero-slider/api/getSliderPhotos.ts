interface sliderPhoto {
  title: string;
  description: string;
  file_size: number;
  height: number;
  updated_at: string;
  id: number;
  width: number;
  created_at: string;
  url: string;
}

interface SliderPhotos {
  success: boolean;
  message: string;
  count: number;
  total_pages: number;
  photos: sliderPhoto[];
}

export const getSliderPhotos = async (): Promise<SliderPhotos> => {
  try {
    const res = await fetch('https://boringapi.com/api/v1/photos/?limit=5');
    if (!res.ok) throw new Error('Something wrong!');
    return await res.json();
  } catch (e) {
    throw e;
  }
};
