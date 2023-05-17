import styled from 'styled-components';
import { REST_API_KEY, REDIRECT_URI } from '../KakaoLoginData';
const KakaoButton = styled.button`
	font-size: var(--font-large);
	font-weight: 600;
	color: #191919;
	border: none;
	background-color: #fee500;
	padding: 15px;
	margin: 6px;
	cursor: pointer;
`;

export default function Login() {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

	const handleLogin = () => {
		window.location.href = KAKAO_AUTH_URL;
	};
	return (
		// <h1>Login</h1>
		<div className="main">
			<KakaoButton onClick={handleLogin}>카카오로 시작하기</KakaoButton>
		</div>
	);
}
