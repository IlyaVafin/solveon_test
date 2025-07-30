import { getSliderPhotos } from "../api/getSliderPhotos"

const SliderContainer = async () => {
	const sliderPhotos = await getSliderPhotos()
	console.log(sliderPhotos);
	
	return (
		<>
		
		</>
	)
}

export default SliderContainer