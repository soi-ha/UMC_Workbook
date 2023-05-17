import styled from 'styled-components';
import { REST_API_KEY, REDIRECT_URI } from '../KakaoLoginData';

const KakaoButton = styled.button`
	font-size: var(--font-large);
	font-weight: 600;
	color: #191919;
	border: none;
	background-color: #fee500;
	padding: 15px;
	cursor: pointer;
	margin-top: 20px;
	margin-left: 30px;
`;

const KakaoBox = styled.div`
	position: relative;
	margin: 0 auto;
	height: 200px;
	width: 230px;
	top: 200px;
	border: 1.5px solid rgb(239 239 239);
	border-radius: 8px;
	padding: 50px;
`;

const LoginTitle = styled.div`
	font-size: var(--font-title);
	text-align: center;
`;

const LoginSubTitle = styled.div`
	font-size: 16px;
	margin-bottom: 10px;
	margin-left: 4px;
	margin-top: 30px;
	text-align: center;
`;

export default function Login() {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

	const handleLogin = () => {
		window.location.href = KAKAO_AUTH_URL;
	};
	return (
		// <h1>Login</h1>
		<KakaoBox>
			<LoginTitle>로그인</LoginTitle>
			<LoginSubTitle>SNS 계정으로 로그인하기</LoginSubTitle>
			<KakaoButton onClick={handleLogin}>카카오로 시작하기</KakaoButton>
		</KakaoBox>
	);
}
