import Banner from '../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerContainer() {
	const banner1 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e6bbfa0b-004d-4b9c-923b-02c4521af50d.jpg',
	};
	const banner2 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/fe5252d5-1af1-4e88-8c25-1e2c22beda61.jpg',
	};
	const banner3 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/20139e33-d871-4de9-a2e8-18a3024af36d.jpg',
	};
	const banner4 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/ef5da663-4c2a-48cf-be5a-b39cc452b5b2.jpg',
	};
	const banner5 = {
		imglink:
			'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/7bf13b1c-a08b-495f-af5d-56cfa900eb39.jpg',
	};

	return (
		<div className="banner">
			<div className="banner-img">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{ delay: 5000 }}
					navigation
					pagination={{ clickable: true }}
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
