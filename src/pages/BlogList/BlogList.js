import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import './BlogList.css';

import profileImg from '../../images/profileImg.jpeg';

function BlogList() {
	const history = useHistory();

	const [listMenu, setListMenu] = useState(0);
	// useEffect로 page가 변할때 마다 띄워줄 데이터의 idx를 서버에 요청한다
	const [page, setPage] = useState(1);
	// 리스트 페이지 접속 시 총 게시글 몇갠지 먼저 받아오고 페이지에 따라 따로 리스트 받아오기

	const allContentNum = 50;

	const menuArr = ['전체', '인기순', '조회순'];

	const list = [
		{
			id: 0,
			title: '여행 블로그',
			createAt: '2022 01 19 　17시 30분',
			nickname: 'uni',
			like: 3,
			view: 20,
			text: '여행을 좋아하는 분들을 위한 감성블로그입니다. 여행을 좋아하는 분들을 위한 감성블로그입니다. 여행을 좋아하는 분들을 위한 감성블로그입니다. 여행을 좋아하는 분들을 위한 감성블로그입니다. 여행을 좋아하는 분들을 위한 감성블로그입니다. 여행을 좋아하는 분들을 위한 감성블로그입니다.',
			url: '',
		},
		{
			id: 1,
			title: '맛집 블로그',
			createAt: '2022 01 19 　12시 47분',
			nickname: 'bbang',
			like: 2,
			view: 8,
			text: '맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다. 맛집을 좋아하는 분들을 위한 감성블로그입니다.',
			url: '',
		},
		{
			id: 2,
			title: '영화 블로그',
			createAt: '2022 01 19 　07시 11분',
			nickname: 'bob',
			like: 6,
			view: 50,
			text: '영화를 좋아하는 분들을 위한 감성블로그입니다. 영화를 좋아하는 분들을 위한 감성블로그입니다. 영화를 좋아하는 분들을 위한 감성블로그입니다.',
			url: '',
		},
	];

	const listEl = list.map((el, idx) => (
		<li key={idx}>
			<div className="list_author">
				<img src={profileImg} alt="profileImg" />
				<div>
					<h2
						className="list_nickname"
						onClick={() => {
							history.push(`/profile/${el.nickname}`);
						}}
					>
						{el.nickname}
					</h2>
					<p>{el.createAt}</p>
				</div>
			</div>

			<h2
				className="list_title"
				onClick={() => {
					detailPush(el.id);
				}}
			>
				{el.title}
			</h2>
			<p
				className="list_text"
				onClick={() => {
					detailPush(el.id);
				}}
			>
				{el.text}
			</p>
			<div className="list_comment_box">
				<p className="list_likeIcon like">{el.like}</p>
				<p>조회 {el.view}</p>
			</div>
		</li>
	));

	const changePage = (page) => {
		setPage(page);
		console.log(page);
	};

	const detailPush = (id) => {
		history.push(`/detail/${id}`);
	};

	const menuEl = menuArr.map((el, idx) => (
		<li className={idx === listMenu ? 'active' : null} key={idx}>
			<Link
				to={`/list/?type=${idx}`}
				onClick={() => {
					setListMenu(idx);
				}}
			>
				{el}
			</Link>
		</li>
	));

	return (
		<div className="list_wrap">
			<ul className="list_menu_box">{menuEl}</ul>
			<ul className="list_box">{listEl}</ul>
			<div className="list_pageNum_box">
				<Pagination
					activePage={page}
					itemsCountPerPage={12}
					totalItemsCount={allContentNum}
					pageRangeDisplayed={5}
					prevPageText={'‹'}
					nextPageText={'›'}
					activeClass="strong"
					onChange={changePage}
				/>
			</div>
		</div>
	);
}

export default BlogList;
