const menuBtn = document.querySelector('.menu-btn');
const menuCloseBtn = document.querySelector('.menu-list-close-btn');
const menuListWrp = document.querySelector('.menu-list-wrp');
const filterBtn = document.querySelector('.filter-btn');
const filterBtnClose = document.querySelector('.filter-btn-close');
const filterActive = document.querySelector('.filter-list-wrp');

menuBtn.onclick = function () {
  menuListWrp.classList.toggle('active');
}
menuCloseBtn.onclick = function () {
  menuListWrp.classList.remove('active');
}
filterBtn.onclick = function () {
  filterActive.classList.add('filter-active');
}
filterBtnClose.onclick = function () {
  filterActive.classList.remove('filter-active');
}