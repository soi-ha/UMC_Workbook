import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Form = styled.form`
	display: flex;
	position: relative;
	flex-direction: column;
	top: 200px;
	width: 300px;
	margin: 0 auto;
`;

const Title = styled.div`
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 30px;
	text-align: center;
`;

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	return (
		<Form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
			<Title>회원가입</Title>

			<TextField className="field" required id="name" label="이름" placeholder="홍길동" {...register('name')} />

			<TextField
				className="field"
				required
				label="이메일"
				id="email"
				type="email"
				placeholder="test@email.com"
				aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
				{...register('email', {
					required: '이메일은 필수 입력입니다.',
					pattern: {
						value: /\S+@\S+\.\S+/,
						message: '이메일 형식에 맞지 않습니다.',
					},
				})}
			/>
			{errors.email && <small role="alert">{errors.email.message}</small>}

			<TextField
				className="field"
				required
				id="password"
				label="비밀번호"
				type="password"
				placeholder="Password"
				autoComplete="current-password"
				aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
				{...register('password', {
					required: '비밀번호는 필수 입력입니다.',
					minLength: {
						value: 8,
						message: '8자리 이상 비밀번호를 사용하세요.',
					},
				})}
			/>
			{errors.password && <small role="alert">{errors.password.message}</small>}

			<TextField
				className="field"
				required
				id="phone"
				label="핸드폰번호"
				type="tel"
				placeholder="010-0000-0000"
				InputLabelProps={{
					shrink: true,
				}}
				aria-invalid={!isDirty ? undefined : errors.phone ? 'true' : 'false'}
				{...register('phone', {
					required: '핸드폰 번호는 필수 입력입니다.',
					pattern: {
						value: /^(\d{2,3})-?(\d{3,4})-?(\d{4})$/,
						message: '핸드폰 번호 형식에 맞지 않습니다.',
					},
				})}
			/>
			{errors.phone && <small role="alert">{errors.phone.message}</small>}

			<Button variant="contained" endIcon={<SendIcon />} disabled={isSubmitting}>
				회원가입
			</Button>
		</Form>
	);
}
