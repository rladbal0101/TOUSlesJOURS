const searchEl = document.querySelector('.material-icons');

const searchInputEl = document.querySelector('.search input');

const btnCloseEl = document.querySelector('.btn-close');

// 검색 버튼 클릭
searchEl.addEventListener('click', function () {
  searchEl.classList.add('focused');
  searchInputEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '   제품명을 입력해 주세요.');
  btnCloseEl.classList.add('focused');
  // searchInputEl.focus();
});

// 닫기 버튼 클릭
btnCloseEl.addEventListener('click', function name(params) {
  searchEl.classList.remove('focused');
  searchInputEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '   제품명을 입력해 주세요.');
  btnCloseEl.classList.remove('focused');
});

// EVENT 수평 슬라이드 기능
new Swiper('.event .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 2000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  }, // 자동 재생 여부
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
});