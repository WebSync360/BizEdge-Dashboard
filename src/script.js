const toggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  toggle.classList.toggle('hidden');
});

sidebar.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    sidebar.classList.add('-translate-x-full');
    toggle.classList.remove('hidden');
  }
});