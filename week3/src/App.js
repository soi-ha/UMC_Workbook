// import { useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Market from './pages/Market';
import Beauty from './pages/Beauty';
import Login from './pages/Login';
import KakaoLogin from './pages/KakaoLogin';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [page, setPage] = useState('market');

	return (
		<BrowserRouter>
			{/* <Header color={page} onChange={setPage} /> */}
			<Header color={page} onChange={setPage} />
			<Routes>
				<Route path="/" element={<Market />} />
				<Route path="/beauty" element={<Beauty />} />
				<Route path="/login" element={<Login />} />
				<Route path="/kakaologin" element={<KakaoLogin />} />
			</Routes>
		</BrowserRouter>
		// <>
		// 	<Header color={page} onChange={setPage} />
		// 	{page === 'market' && <Market />}
		// 	{page === 'beauty' && <Beauty />}
		// </>
	);
}

export default App;
