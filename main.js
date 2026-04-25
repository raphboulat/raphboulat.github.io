(async function () {
  const page = document.body.dataset.page || 'home';

  async function loadPartial(containerId, path) {
    const el = document.getElementById(containerId);
    if (!el) return;
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(res.statusText);
      el.innerHTML = await res.text();
    } catch (e) {
      console.warn('Could not load partial:', path, e.message);
    }
  }

  await Promise.all([
    loadPartial('sidebar-container', 'partials/sidebar.html'),
    loadPartial('nav-container', 'partials/nav.html'),
  ]);

  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');
})();
