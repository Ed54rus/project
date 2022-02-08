const menuBtn = document.querySelector('.menu-btn');
const menuCloseBtn = document.querySelector('.menu-list-close-btn');
const menuList = document.querySelector('.menu-list');

menuBtn.onclick = function () {
  menuList.classList.toggle('active');
}

menuCloseBtn.onclick = function () {
  menuList.classList.remove('active');
}
