export interface sliderPhoto {
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

export interface SliderPhotos {
  success: boolean;
  message: string;
  count: number;
  total_pages: number;
  photos: sliderPhoto[];
}