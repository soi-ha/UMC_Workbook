import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

const BaseBox = styled.div`
	margin-top: 200px;
  display; flex;
`;

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	return (
		<BaseBox>
			<form
				onSubmit={handleSubmit(async (data) => {
					await new Promise((r) => setTimeout(r, 1000));
					alert(JSON.stringify(data));
				})}
			>
				<label htmlFor="email">이름</label>
				<input
					id="name"
					type="text"
					placeholder="홍길동"
					{...register('name', {
						required: '이름은 필수 입력입니다.',
					})}
				/>

				<label htmlFor="email">이메일</label>
				<input
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

				<label htmlFor="password">비밀번호</label>
				<input
					id="password"
					type="password"
					placeholder="****************"
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

				<label htmlFor="email">핸드폰 번호</label>
				<input
					id="phone"
					type="tel"
					placeholder="010-0000-0000"
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

				<button type="submit" disabled={isSubmitting}>
					회원가입
				</button>
			</form>
		</BaseBox>
	);
}
