import { useLocation, useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from '../KakaoLoginData';
import { useEffect } from 'react';

export default function KakaoLogin() {
	const location = useLocation();
	const navigate = useNavigate();
	const KAKAO_CODE = location.search.split('=')[1];

	// TOKEN save
	const getKakaoToken = () => {
		fetch('https://kauth.kakao.com/oauth/token', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.access_token) {
					localStorage.setItem('token', data.access_token);
				} else {
					navigate('/faillogin');
				}
			});
	};

	useEffect(() => {
		if (!location.search) return;
		getKakaoToken();
	}, []);
}
