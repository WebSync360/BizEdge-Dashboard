const sidebar = document.querySelector('aside');
const btn = document.getElementById('mobile-menu-btn');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});