// import { useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Market from './pages/Market';
import Beauty from './pages/Beauty';
import { useState } from 'react';

function App() {
	const [page, setPage] = useState('market');

	return (
		<>
			<Header color={page} onChange={setPage} />
			{page === 'market' && <Market />}
			{page === 'beauty' && <Beauty />}
		</>
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
