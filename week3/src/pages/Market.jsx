import CollectionContainer from '../containers/CollectionContainer';
import ProductContanier from '../containers/ProductContainer';
import BannerContainer from '../containers/BannerContainer';
import { useEffect } from 'react';
// import { useEffect, useState } from 'react';
import Popup from '../components/Popup';
import { createStore } from 'redux';

export default function Market() {
	// const [showMainPop, setShowMainPop] = useState(false);
	// // 기본 세팅 값은 false(팝업 노출 없음)
	// // true로 할 경우, '오늘 하루 안 보기'를 클릭해도 리렌더링하면 팝업창이 나타남
	// const HOME_VISITED = localStorage.getItem('homeVisited');
	// // localStorage에 homeVisited 조회(가져오기)

	// useEffect(() => {
	// 	// 오늘의 시간을 담은 정수
	// 	const today = new Date();
	// 	const handleMainPop = () => {
	// 		if (HOME_VISITED && HOME_VISITED > today) {
	// 			// localStorage에 저장된 시간이 존재(true)하고 &&
	// 			// 현재 시간(today)이 localStorage의 시간보다 작으면 return(기본값 false를 return), popup 노출 없음(setShowMainPop(false))
	// 			// localStorage의 시간: 이전에 팝업창이 떴을 때, '오늘 하루 보지 않기'를 클릭한 시간 + 24시간
	// 			return;
	// 		}
	// 		if (!HOME_VISITED || HOME_VISITED < today) {
	// 			// localStorage에 저장된 시간이 없거나(false) |
	// 			// localStorage에 저장된 시간이 현재 시간(today)보다 작다면
	// 			// popup 노출
	// 			setShowMainPop(true);
	// 		}
	// 	};
	// 	window.setTimeout(handleMainPop, 100); // 0.1초 후에 실행
	// }, [HOME_VISITED]);

	const today = new Date();

	// 관리할 상태 정의
	const initialState = {
		visited: localStorage.getItem('homeVisited'),
		boolean: false,
	};

	// 액션타입 정의
	const SETSHOWMAINPOP = 'SETSHOWMAINPOP';

	// 액션 생성함수 정의
	const setShowMainPop = () => ({
		type: SETSHOWMAINPOP,
		visited: localStorage.getItem('homeVisited'),
		boolean: true,
	});

	// 리듀서 만들기
	function reducer(state = initialState, action) {
		if (action.visited && action.visited > today) {
			return;
		}
		if (!action.visited || action.visited < today) {
			return {
				...state,
				boolean: true,
			};
		}
	}

	// 스토어 만들기
	const store = createStore(reducer);

	// 디스패치
	useEffect(() => {
		store.dispatch(window.setTimeout(setShowMainPop, 100));
	}, [initialState.visited, store]);
	// store.dispatch(window.setTimeout(setShowMainPop, 100));

	return (
		<>
			{/* Popup에 setShoMainPop전달 */}
			{/* {showMainPop &&÷<Popup setShowMainPop={setShowMainPop}></Popup>} */}
			<Popup setShowMainPop={setShowMainPop}></Popup>
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
