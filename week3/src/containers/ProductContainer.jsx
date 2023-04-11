import Product from '../components/Product';

export default function ProductContanier() {
	const product1 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1615531227660l0.jpg',
		name: '[크라운] 참쌀선과 115g (5.8g x 20봉지)',
		price: '2,180원',
		review: '999+',
	};

	const product2 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1609914448361l0.jpg',
		name: '[오덴세] 테누노 티스폰 4P 세트 3종 (택1)',
		price: '9,000원',
		review: '42',
	};

	const product3 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1625034060255l0.jpg',
		name: '[크라운] 뽀또 치즈타르트 322g',
		price: '4,240원',
		review: '863',
	};

	const product4 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1655703620192l0.jpg',
		name: '[YOZM] 플레인그릭요거트 100g',
		price: '3,900원',
		review: '9,999+',
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
