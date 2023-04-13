const searchEl = document.querySelector('.material-icons');

const searchInputEl = document.querySelector('.search input');

const btnCloseEl = document.querySelector('.btn-close');

// 검색 버튼 클릭
searchEl.addEventListener('click', function () {
  searchEl.classList.add('focused');
  searchInputEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '제품명을 입력해 주세요.');
  btnCloseEl.classList.add('focused');
  // searchInputEl.focus();
});

// 닫기 버튼 클릭
btnCloseEl.addEventListener('click', function name(params) {
  searchEl.classList.remove('focused');
  searchInputEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '제품명을 입력해 주세요.');
  btnCloseEl.classList.remove('focused');
});