const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menau-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.computedStyleMap.left = '0');

menuClose.addEventListener('click', () =>sidebar.computedStyleMap.left = '-100');
