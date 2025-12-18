const toggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const openIcon = document.getElementById('icon-open');
const closeIcon = document.getElementById('icon-close');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Optional: auto-close when clicking sidebar on mobile
sidebar.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    sidebar.classList.add('-translate-x-full');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});
