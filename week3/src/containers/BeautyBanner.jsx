import Banner from '../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

export default function BeautyBanner() {
	const banner1 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/8842d8c9-2343-4647-8c7c-867cd4919d06.png',
	};
	const banner2 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a2a2faa5-71dd-485a-80fd-17fb15b833b1.png',
	};
	const banner3 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/c142bc86-8aa6-49cb-88b3-f3ab2868e85c.png',
	};
	const banner4 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/0ab679ef-7417-4f5b-88e0-698c0758736a.jpg',
	};
	const banner5 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/844e64e6-e81a-495c-903c-be586da69d22.jpg',
	};

	return (
		<div className="banner">
			<div className="banner-img">
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1}
					autoplay={{ delay: 5000 }}
					navigation
					loop
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<Banner {...banner1} />
					</SwiperSlide>
					<SwiperSlide>
						<Banner {...banner2} />
					</SwiperSlide>
					<SwiperSlide>
						<Banner {...banner3} />
					</SwiperSlide>
					<SwiperSlide>
						<Banner {...banner4} />
					</SwiperSlide>
					<SwiperSlide>
						<Banner {...banner5} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
