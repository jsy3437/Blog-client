import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [login, setLogin] = useState(false);

	return (
		<div className="nav_wrap">
			<div className="nav_flexBox">
				<Link to="/" className="nav_logo">
					로그로그
				</Link>
				<div className="nav_menu">
					<div className="nav_user_flexBox">
						{/* Link 태그를 사용하면 가상dom이 작동하며 a태그와 다르게 리랜더링이 되지 않는다 */}
						{!login && <Link to="/register">Signup</Link>}
						{!login && <Link to="/login">Login</Link>}
						{login && <Link to="/profile">Profile</Link>}
						{login && <p>Logout</p>}
					</div>
					<ul className="nav_menu_flexBox">
						{/* todo : 서버에서 메뉴이름 받아오기 */}
						<li>
							<Link to="/list/?type=0">글목록</Link>
						</li>
						<li>
							<Link to="/write">글쓰기</Link>
						</li>
						{/* <li>메뉴3</li> */}
						<li>문의하기</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
