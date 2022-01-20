import React from 'react';
import './BlogDetail.css';
import * as blogController from '../../controller/blog';
import { useHistory } from 'react-router-dom';

function BlogDetail() {
	const history = useHistory();

	const likeSubmit = () => {
		blogController.likeUpdate().then((res) => {
			const { success } = res.data;
			if (success) {
				alert('좋아요!');
			}
		});
	};

	return (
		<div className="detail_wrap">
			<div className="detail_box">
				<h1>제목제목제목제목제목제목</h1>
				<div className="detail_title_box">
					<div>
						<p>닉네임네임</p>
						<p>1시간 전</p>
					</div>

					<div>
						<p className="detail_like like" onClick={likeSubmit}>
							5
						</p>
						<p>조회 5</p>
					</div>
				</div>
				<div className="detail_content_box">
					{/* 이미지가 있을때만 */}
					<div className="detail_Img_box">이미지</div>
					<div className="detail_text_box">
						<p>
							장인가구 제품 구매 후기나 대리점 방문 후기를 # 필수 해시태그와
							함께 블로그나 인스타그램, 유튜브에 남기고 장인가구 메일
							janginstyle@naver.com으로 후기 URL을 보내주시는 분들 중 15명의
							우수 리뷰어를 선정해 '메모리폼 베개'를 드립니다 :) ​ 매장에서 찍은
							제품 사진으로도 참여하실 수 있으니 많은 참여 부탁드립니다~ ​
							*제품만 찍은 사진보다는 주변 인테리어도 함께 엿볼 수 있는
							사진일수록 당첨 확률 Up! *직접 찍은 사진으로만 참여하실 수
							있습니다. *동일 아이디로는 한 번만 참여 가능합니다. *장인가구
							아이브 제품은 경품 지급 대상에서 제외될 수 있습니다. *필수
							해시태그를 넣지 않는 등 무성의한 리뷰, 기타 광고용 포스팅의 경우
							경품 지급 대상에서 제외될 수 있습니다. *국내 주소로만 경품 배송이
							가능합니다. *올려주신 자료는 마케팅에 활용될 수 있습니다. *경품을
							받을 목적으로 SNS 계정을 신규 개설하는 등 비활동 계정은 경품 지급
							대상에서 제외될 수 있습니다. [출처] [이벤트] 치킨, 신세계상품권
							주는 이벤트! 장인가구 매장에서 가장 보고 싶은 가구는?|작성자
							장인가구
						</p>
					</div>
				</div>
			</div>
			<div className="detail_bottom_box">
				<div className="detail_profile_box">
					<img src="dshsgfdgd" alt="afsdfsd" />
					<div>
						<h2>닉네임네임</h2>
						<p>(ididid12)</p>
					</div>
				</div>
				<div className="detail_logo">로그로그</div>
				<div className="detail_btn_box">
					<button
						className="submit"
						onClick={() => {
							history.push('/write');
						}}
					>
						글쓰러가기
					</button>
					<button
						onClick={() => {
							history.push('/list/?type=0');
						}}
					>
						목록으로
					</button>
				</div>
			</div>
		</div>
	);
}

export default BlogDetail;
