import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

import * as userController from '../../controller/user';

import privacyIcon from '../../images/privacy.svg';

function Profile() {
	const list = ['게시물1', '게시물2', '게시물3'];
	const [pwEl, setPwEl] = useState(false);
	const [password, setPassword] = useState('');
	const [newPw, setNewPw] = useState('');
	const [newPwConfirm, setNewPwConfirm] = useState('');

	const writeEl = list.map((el, idx) => (
		<li>
			<span>{idx + 1}</span>. {el}
		</li>
	));

	const likeEl = list.map((el, idx) => (
		<li>
			<span>{idx + 1}</span>. {el}
		</li>
	));

	const pwElSwitch = () => {
		setPwEl(!pwEl);
	};

	const onChangePw = (e) => {
		setPassword(e.target.value);
	};

	const onChangeNewPw = (e) => {
		setNewPw(e.target.value);
	};

	const onChangeNewPwConfirm = (e) => {
		setNewPwConfirm(e.target.value);
	};

	const submitPassword = () => {
		if (newPw !== newPwConfirm) {
			return alert('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다');
		}
		const body = {
			password,
			newPw,
		};

		userController.update(body).then((res) => {
			const { success } = res.data;
			if (success) {
				alert('비밀번호 변경 완료');
			} else {
				alert('현재 비밀번호가 틀리거나 현재 비밀번호와 같습니다');
			}
		});
	};
	return (
		<div className="profile_wrap">
			<h1>마이페이지</h1>
			<div className="pf_gridBox">
				<div className="pf_privacy">
					<div className="privacy title">
						<p>내정보</p>
					</div>
					<div className="privacy content">
						<img src={privacyIcon} alt="privacyIcon" />
						<p>닉네임 : uni</p>
						<p>gusdo3437</p>
						<button onClick={pwElSwitch}>비밀번호 변경</button>
					</div>
				</div>

				{pwEl && (
					<div className="pf_change_password">
						<div className="change title">
							<p>비밀번호 변경하기</p>
						</div>
						<div className="change content">
							<input
								type="password"
								onChange={onChangePw}
								placeholder="현재 비밀번호"
							/>
							<input
								type="password"
								onChange={onChangeNewPw}
								placeholder="새 비밀번호"
							/>
							<input
								type="password"
								onChange={onChangeNewPwConfirm}
								placeholder="새 비밀번호 확인"
							/>
							<button className="submit" onClick={submitPassword}>
								비밀번호 변경
							</button>
						</div>
					</div>
				)}

				<div className="pf_writing_list">
					<div className="writing title">
						<p>내가 쓴 게시물</p>
					</div>
					<div className="writing content">
						<ul>{writeEl}</ul>

						<Link to="/write" className="btn_link">
							게시물 작성
						</Link>
					</div>
				</div>
				<div className="pf_qna_list">
					<div className="pna title">
						<p>내가 좋아하는 게시물</p>
					</div>
					<div className="pna content">
						<ul>{likeEl}</ul>
						<Link to="/list" className="btn_link">
							게시물 목록
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
