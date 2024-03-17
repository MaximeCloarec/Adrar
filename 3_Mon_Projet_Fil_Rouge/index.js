function toggleTheme() {
    const checkbox = document.getElementById('themeCheckbox');
    const newTheme = checkbox.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  }