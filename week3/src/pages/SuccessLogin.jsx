import styled from 'styled-components';

const Message = styled.div`
	font-size: 26px;
	position: relative;
	top: 200px;
	margin-bottom: 10px;
	text-align: center;
`;
export default function FailLogin() {
	return (
		<>
			<Message>로그인에 성공하셨습니다.</Message>
			<Message>가입을 축하합니다🥳</Message>
		</>
	);
}
