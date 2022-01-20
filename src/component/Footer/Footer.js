import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<div className="footer_wrap">
			<div className="foo_content_box">
				<div className="foo_myInfo">
					<img src="sdfsf" alt="logo" />
					<p>joseoyoon12@gmail.com</p>
					<div className="foo_social">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
							alt="instagram-logo"
						/>

						<img
							src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
							alt="facebook-logo"
						/>
					</div>
				</div>
				<div className="foo_company">
					<p>Welcome :)</p>
					<p>Cetus Studio</p>
					<p>cetusstudio1109@gmail.com</p>
					<p>경기도 안산시 단원구 광덕서로102 대우빌딩 406-7호</p>
				</div>
				<div className="footer_btn_box">
					<p>
						<Link to="/register">회원가입</Link>
					</p>
					<p>
						<Link to="/login">로그인</Link>
					</p>
					<p>
						<Link to="/list/?type=0">글목록</Link>
					</p>
					<p>
						<Link to="/write">글쓰기</Link>
					</p>
				</div>
			</div>
			<p className="foo_copyright">Copyrightⓒ2022 UNI All rights reserved.</p>
		</div>
	);
}

export default Footer;
