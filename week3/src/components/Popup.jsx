import styled from 'styled-components';

styled.button`
	font-size: var(--font-small);
	font-weight: 500;
	border: none;
	background-color: #96e2d8;
	padding: 5px;
	margin: 6px;
	cursor: pointer;
`;

const PopupWrapper = styled.div`
	z-index: 99999;
	position: fixed;
	width: 350px;
	left: 20%;
	img {
		width: 350px;
	}
`;

const ButtonBox = styled.div`
	margin-top: -15px;
	background-color: #96e2d8;
	button {
		font-size: var(--font-small);
		font-weight: 500;
		border: none;
		background-color: #96e2d8;
		padding: 5px;
		margin: 6px;
		cursor: pointer;
	}
`;

export default function Popup({ setShowMainPop }) {
	const closePop = () => {
		setShowMainPop(false);
	};

	const closeTodayPop = () => {
		// 현재 시간을 담는 변수 expires
		let expires = new Date();
		// 현재 시간에서 24간 뒤의 시간을 저장
		expires = expires.setHours(expires.getHours() + 24);
		// 현재 시간의 24시간 뒤(value)의 시간을 homeVisited(key)에 저장
		localStorage.setItem('homeVisited', expires);
		// popup 노출 안함
		setShowMainPop(false);
	};
	return (
		// <div className="popup-wrapper">
		// 	<img
		// 		src="https://product-image.kurly.com/category/banner/pc/e5d6bd51-fcc5-4b82-8bb1-c33350cf2537.jpg"
		// 		alt="팝업창"
		// 	/>
		// 	<div className="popup-button">
		// 		<button onClick={closeTodayPop}>오늘 하루 안 보기</button>
		// 		<button onClick={closePop}>닫기</button>
		// 	</div>
		// </div>

		<PopupWrapper>
			<img
				src="https://product-image.kurly.com/category/banner/pc/e5d6bd51-fcc5-4b82-8bb1-c33350cf2537.jpg"
				alt="팝업창"
			/>
			<ButtonBox>
				<button onClick={closeTodayPop}>오늘 하루 안 보기</button>
				<button onClick={closePop}>닫기</button>
			</ButtonBox>
		</PopupWrapper>
	);
}
