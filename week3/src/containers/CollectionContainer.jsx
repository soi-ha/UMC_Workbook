import Collection from '../components/Collection';

export default function CollectionContainer() {
	const collection1 = {
		imglink:
			'https://3p-image.kurly.com/product-image/546b466a-018d-46a2-9f7f-6814af156774/414e40a0-3085-4949-9904-c21dd45fd051.jpg',
		name: '[전통주] 허니문배(4.9도 750ml)',
		price: '16,100원',
	};

	const collection2 = {
		imglink:
			'https://3p-image.kurly.com/product-image/546b466a-018d-46a2-9f7f-6814af156774/745d9b2d-8590-4b6c-b47a-178c930d5b33.jpg',
		name: '[전통주] 심술 3종 (택1)(7도 330ml)',
		price: '2,500원',
	};

	const collection3 = {
		imglink:
			'https://3p-image.kurly.com/product-image/ff51c73d-ad70-486d-90be-4bd1a61c6a7f/308458b8-0209-4635-b2ab-9ff4b00d0f0a.jpg',
		name: '전통주] 복순도가 혼합 2종 세트',
		price: '28,000원',
	};

	const collection4 = {
		imglink:
			'https://3p-image.kurly.com/product-image/546b466a-018d-46a2-9f7f-6814af156774/c5927b8f-696b-4c06-99ab-ec35ecf6df16.jpg',
		name: '[전통주] 빙탄복(7도 370ml)',
		price: '4,500원',
	};
	return (
		<>
			<div className="collection-top">
				<div className="collection-left">
					<img
						className="left-img"
						src="https://product-image.kurly.com/main/random-collection/article/pc/img/cf6c02e7-328a-47de-900d-6fc47455a86b.png"
						alt="상품 이미지"
					/>
				</div>
				<div className="collection-right">
					<strong className="right-top">한 잔을 부르는 봄밤 🌠</strong>
					<p className="right-bottom">
						따뜻한 기온 탓에 그냥 보내기 싫은 요즘 저녁. 더 특별한 시간을 만들어 줄 아이템을 소개합니다. 멜론의
						싱그러움이 느껴지는 막걸리부터 와인으로 변신한 과실주 까지. 뻔하지 않은 전통주와 함께라면 잊지 못할 올봄
						추억을 만들 수 있을 거예요.
					</p>
				</div>
			</div>
			<Collection {...collection1} />
			<Collection {...collection2} />
			<Collection {...collection3} />
			<Collection {...collection4} />
		</>
	);
}
