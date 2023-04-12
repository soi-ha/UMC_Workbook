import Collection from '../components/Collection';

export default function ProductContanier() {
	const collection1 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1652971229715l0.jpg',
		name: '[삐아] 레디 투 웨어 네일 컬러 6종',
		price: '7,000원',
	};

	const collection2 = {
		imglink: 'https://product-image.kurly.com/product/image/15fd2068-ed1c-45bd-978a-b5625735e619.jpg',
		name: '[데이지크] 시럽 네일 컬러 10종 (택1)',
		price: '9,700원',
	};

	const collection3 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1653981545725l0.jpg',
		name: '[위드샨] 60초 건조네일 9ml 매니큐어_10종',
		price: '4,100원',
	};

	const collection4 = {
		imglink: 'https://img-cf.kurly.com/shop/data/goods/1648131370828l0.jpg',
		name: '[리르] 미라클 큐티클 오일 푸셔',
		price: '5,500원',
	};
	return (
		<>
			<div className="collection-top">
				<div className="collection-left">
					<img
						className="left-img"
						src="https://product-image.kurly.com/main/random-collection/article/pc/img/b0456a58-5d8a-422b-a64a-14911fbd9205.png"
						alt="상품 이미지"
					/>
				</div>
				<div className="collection-right">
					<strong className="right-top">손끝에 찾아온 봄💅🌷</strong>
					<p className="right-bottom">
						따스한 햇볕에 기분까지 설레는 요즘. 꽃잎이 내려앉은 듯 화사한 손을 만들어 줄 아이템을 소개합니다. 파스텔톤의
						영롱한 매니큐어부터 매일 사용하기 좋은 핸드크림까지, 손끝에 봄을 담아보세요!
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
