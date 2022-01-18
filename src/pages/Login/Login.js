import React, { useState } from 'react';
import './Login.css';

import * as userController from '../../controller/user';
import { useHistory } from 'react-router-dom';

function Login() {
	const history = useHistory();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'username':
				return setUsername(value);
			case 'password':
				return setPassword(value);
			// no default
		}
	};

	const submit = () => {
		const body = {
			username,
			password,
		};

		userController.login(body).then((res) => {
			const { success } = res.data;
			if (success) {
				history.push('/');
			}
		});
	};

	return (
		<div className="login_wrap">
			<h1>로그인</h1>
			<div className="login_box">
				<input
					type="text"
					name="username"
					onChange={onChange}
					placeholder="아이디"
				/>

				<input
					type="password"
					name="password"
					onChange={onChange}
					placeholder="비밀번호"
				/>

				<button className="submit" onClick={submit}>
					로그인
				</button>
			</div>
		</div>
	);
}

export default Login;
