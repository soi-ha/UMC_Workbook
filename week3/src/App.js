// import { useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Market from './pages/Market';
import Beauty from './pages/Beauty';
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
			</Routes>
		</BrowserRouter>
		// <>
		// 	<Header color={page} onChange={setPage} />
		// 	{page === 'market' && <Market />}
		// 	{page === 'beauty' && <Beauty />}
		// </>
	);
}

// 실패1
// function App() {
// 	const childRef = useRef();
// 	const [page,setPage] = useState(true);
// 	setPage ()
// 	if (page === true) {
// 		return (
// 			<>
// 				<Header />
// 				<Market ref={childRef}/>
// 			</>
// 		)
// 	} else {
// 		return (
// 			<>
// 				<Header />
// 				<Beauty ref={childRef}/>
// 			</>
// 		)
// 	}
// }

// 실패2
// function App() {
// 	const childRef = useRef();
// 	const [page, setPage] = useState(true);

// 	return (
// 		<>
// 			<Header />
// 			<Market style={page}/>
// 			<Beauty style={page}/>
// 		</>
// 	);
// }
// function App() {
// 	const [page, setPage] = useState(true);
// 	const pageNone = () => {
// 		setPage('display:"none"')
// 	}
// 	const pageBlock = () => {
// 		setPage('display:"block"')
// 	}

export default App;
