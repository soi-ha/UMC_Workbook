import BeautyBanner from '../containers/BeautyBanner';
import BeautyProduct from '../containers/BeautyProduct';
import BeautyCollection from '../containers/BeautyCollection';
export default function Beauty() {
	return (
		<>
			<div className="shadow"></div>
			<div className="main">
				<BeautyBanner />
				<div className="main-box recommend">
					<div className="box-title">이 상품 어때요?</div>
					<div className="box-content">
						<BeautyProduct />
					</div>
				</div>
				<div className="main-box notice">
					<img
						src="https://product-image.kurly.com/banner/random-band/pc/img/7e716f20-4a9a-498a-b99e-f51a14097629.png"
						alt="광고"
					/>
				</div>
				<div className="main-box collection">
					<BeautyCollection />
				</div>
			</div>
		</>
	);
}
