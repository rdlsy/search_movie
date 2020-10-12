import React from 'react';
import '../css/Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <nav className="FtNav">
        <ul>
          <li><a href="/">문화N티켓이란?</a></li>
          <li><a href="/"><span style={{ color: '#ff0000' }}>개인정보처리방침</span></a></li>
          <li><a href="/">이용약관</a></li>
          <li><a href="/">저작권정책</a></li>
          <li><a href="/">검색결과수집정책</a></li>
          <li><a href="/">참여단체관리</a></li>
        </ul>
      </nav>
      <div className="Address">
        <span>대표전화&nbsp;&nbsp;1688-2220&nbsp;&nbsp;이메일&nbsp;&nbsp;ticket@kcisa.kr</span>
        <span>사업자번호&nbsp;101-82-10054&nbsp;통신판매업신고&nbsp;2018-서울마포-1502&nbsp;대표자&nbsp;이현웅</span>
        <span>우)03925 서울시 마포구 월드컵북로400 COPYRIGHTⓒ 한국문화정보원</span>
      </div>
    </footer>
  );
}

export default Footer;