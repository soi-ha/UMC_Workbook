import Product from '../components/Product';

export default function BeautyProductC() {
	const product1 = {
		imglink: 'https://product-image.kurly.com/product/image/e92f3b45-d0c5-47f2-9ecf-40ee1239585a.jpg',
		name: '[연작] 스킨 퍼펙팅 프로텍티브 베이스프렙',
		price: '36,000원',
		review: '197',
	};

	const product2 = {
		imglink: 'https://product-image.kurly.com/product/image/b9dd4f2b-ffca-4957-a95f-973678788a4f.jpg',
		name: '[닥터지] 브라이트닝 업 선 플러스 35ml (1+1 기획)',
		price: '20,900원',
		review: '460',
	};

	const product3 = {
		imglink: 'https://product-image.kurly.com/product/image/673aa3ee-8517-47e5-8a11-67433c76263d.jpg',
		name: '[스킨푸드] 캐롯 카로틴 카밍 워터 패드 250g (60매)',
		price: '16,900원',
		review: '999+',
	};

	const product4 = {
		imglink: 'https://product-image.kurly.com/product/image/e557f274-88aa-490d-9bcc-8dd852cef324.jpg',
		name: '[피지오겔] DMT 페이셜 크림 150ml',
		price: '24,900원',
		review: '999+',
	};
	return (
		<>
			<Product {...product1} />
			<Product {...product2} />
			<Product {...product3} />
			<Product {...product4} />
		</>
	);
}
