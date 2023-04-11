export default function Collection({ imglink, name, price }) {
	return (
		<div className="collection-bottom">
			<ul className="bottom-list">
				<li className="list-item">
					<img className="item-img" src={imglink} alt="상품 이미지" />
					<div className="item-content">
						<div className="content-name">{name}</div>
						<div className="content-price">{price}</div>
					</div>
					<button className="item-button"></button>
				</li>
			</ul>
		</div>
	);
}
