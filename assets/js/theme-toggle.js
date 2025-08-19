// Theme toggle logic for dark/light mode
(function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn ? toggleBtn.querySelector('i') : null;
  const darkClass = 'dark-theme';
  const lightIcon = 'bi-sun';
  const darkIcon = 'bi-moon';

  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add(darkClass);
      if (icon) { icon.classList.remove(darkIcon); icon.classList.add(lightIcon); }
    } else {
      document.body.classList.remove(darkClass);
      if (icon) { icon.classList.remove(lightIcon); icon.classList.add(darkIcon); }
    }
  }

  function getPref() {
    return localStorage.getItem('theme') === 'dark';
  }

  function setPref(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  if (toggleBtn) {
    // Set initial state
    setTheme(getPref());
    toggleBtn.addEventListener('click', function() {
      const isDark = !document.body.classList.contains(darkClass);
      setTheme(isDark);
      setPref(isDark);
    });
  } else {
    // If button not found, set theme on load
    setTheme(getPref());
  }
})();
