const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('mobile-menu-btn');

    btn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });