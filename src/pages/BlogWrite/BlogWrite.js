import React, { useState } from 'react';
import './BlogWrite.css';

import * as blogController from '../../controller/blog';
import { useHistory } from 'react-router-dom';

function BlogWrite() {
	const history = useHistory();

	const [writeTitle, setWriteTitle] = useState('');
	const [writeWriting, setWriteWriting] = useState('');
	const [writeImg, setWriteImg] = useState([]);

	const changeFile = (e) => {
		if (e.target.files[0]) {
			setWriteImg([...writeImg, ...e.target.files]);
		}

		console.log(e.target.files);
	};
	console.log('aa', writeImg);

	const changeTitle = (e) => {
		setWriteTitle(e.target.value);
	};
	const changeWrite = (e) => {
		setWriteWriting(e.target.value);
	};

	const submitWriting = () => {
		const body = {
			writeTitle,
			writeWriting,
		};

		blogController.create(body).then((res) => {
			const { success, data } = res.data;
			if (success) {
				history.push(`/detail/${data.id}`);
			}
		});
	};

	const preview = writeImg.map((el) => (
		<input type="text" value={el.name} readOnly />
	));

	return (
		<div className="write_wrap">
			<h1>게시물 작성</h1>
			<div className="write_box">
				<div className="write_title_box">
					<input
						type="text"
						placeholder="제목 (5글자 이상 30글자 이하)"
						maxLength="30"
						minLength="5"
						onChange={changeTitle}
					/>
				</div>
				<div className="write_img_box">
					{preview}
					<div className="write_fakeBtn_box">
						<input type="file" maxLength="2" multiple onChange={changeFile} />
						<div className="write_fakeBtn btn_link">파일 가져오기</div>
					</div>
				</div>
				<div className="write_writing_box">
					<textarea onChange={changeWrite} />
				</div>
				<div className="write_btn_box">
					<button onClick={submitWriting}>취소</button>
					<button className="submit" onClick={submitWriting}>
						게시물 작성
					</button>
				</div>
			</div>
		</div>
	);
}

export default BlogWrite;
