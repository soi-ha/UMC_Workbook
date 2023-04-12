import CollectionContainer from '../containers/CollectionContainer';
import ProductContanier from '../containers/ProductContainer';
import BannerContainer from '../containers/BannerContainer';
export default function Main() {
	return (
		<>
			<div className="shadow"></div>
			<div className="main">
				<BannerContainer />
				<div className="main-box recommend">
					<div className="box-title">이 상품 어때요?</div>
					<div className="box-content">
						<ProductContanier />
					</div>
				</div>
				<div className="main-box notice">
					<img
						src="https://product-image.kurly.com/banner/random-band/pc/img/df7fad64-8210-4f23-ada1-5088a348a959.jpg"
						alt=""
					/>
				</div>
				<div className="main-box collection">
					<CollectionContainer />
				</div>
			</div>
		</>
	);
}
