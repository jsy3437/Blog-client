import React, { useState } from 'react';
import './Register.css';

import * as userController from '../../controller/user';
import { useHistory } from 'react-router-dom';

function Register() {
	const history = useHistory();

	const [username, setUsername] = useState('');
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [overlap, setOverlap] = useState({ nickname: false, username: false });

	const onChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'username':
				return setUsername(value);
			case 'nickname':
				return setNickname(value);
			case 'password':
				return setPassword(value);
			case 'passwordConfirm':
				return setPasswordConfirm(value);
			// no default
		}
	};

	const overlapCheck = (e) => {
		const { name } = e.target;

		if (name === 'nickCheck') {
			userController.nickCheck(nickname).then((res) => {
				const { success } = res.data;
				if (success) {
					setOverlap({ ...overlap, nickname: true });
					return alert('사용 가능한 닉네임 입니다');
				} else {
					return alert('사용 불가');
				}
			});
		} else if (name === 'nameCheck') {
			userController.nameCheck(username).then((res) => {
				const { success } = res.data;
				if (success) {
					setOverlap({ ...overlap, username: true });
					return alert('사용 가능한 아이디 입니다');
				} else {
					return alert('사용 불가');
				}
			});
		}
	};

	const submit = () => {
		if (!overlap.username) {
			return alert('아이디 중복 확인을 해주세요');
		} else if (!overlap.nickname) {
			return alert('닉네임 중복 확인을 해주세요');
		} else if (password !== passwordConfirm) {
			return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다');
		}

		const body = {
			username,
			nickname,
			password,
		};

		console.log(body);

		userController.register(body).then((res) => {
			const { success, nickname } = res.data;

			if (success) {
				alert(`${nickname}님 가입완료`);
			}
		});
	};

	return (
		<div className="reg_wrap">
			<h1>회원가입</h1>
			<div className="reg_box">
				<input
					type="text"
					name="username"
					placeholder="아이디"
					onChange={onChange}
					readOnly={overlap.username ? true : ''}
				></input>
				<button name="nameCheck" onClick={overlapCheck}>
					중복확인
				</button>
				<input
					type="text"
					name="nickname"
					placeholder="닉네임"
					onChange={onChange}
					readOnly={overlap.nickname ? true : ''}
				></input>
				<button name="nickCheck" onClick={overlapCheck}>
					중복확인
				</button>
				<input
					type="password"
					name="password"
					placeholder="비밀번호"
					onChange={onChange}
				></input>

				<input
					type="password"
					name="passwordConfirm"
					placeholder="비밀번호 확인"
					onChange={onChange}
				></input>
				<button className="submit" onClick={submit}>
					가입하기
				</button>
			</div>
		</div>
	);
}

export default Register;
