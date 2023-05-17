import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function reducer(state = {closePop, closeTodayPop} , action) {
//   return state
// }

// let store = createStore(reducer)

// const closePop = () => {
//   setShowMainPop(false);
// };

// const closeTodayPop = () => {
//   // 현재 시간을 담는 변수 expires
//   let expires = new Date();
//   // 현재 시간에서 24간 뒤의 시간을 저장
//   expires = expires.setHours(expires.getHours() + 24);
//   // 현재 시간의 24시간 뒤(value)의 시간을 homeVisited(key)에 저장
//   localStorage.setItem('homeVisited', expires);
//   // popup 노출 안함
//   setShowMainPop(false);
// };

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
