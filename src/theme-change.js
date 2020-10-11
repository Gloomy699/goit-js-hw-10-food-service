const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('#body');


 const addClassToSwitchTheme = () => {
    if (toggle.checked === true) {
        themeToggle = body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem('siteTheme', true);
    } else {
        themeToggle = body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('siteTheme', false);
    }
}

const saveCurrentThemeWhenRestartPage = () => {
    const themeStorage = localStorage.getItem('siteTheme');
    if (themeStorage) {
        if (themeStorage === 'true') {
            body.classList.add(Theme.DARK);
            toggle.checked = true;
        }
    }
}
toggle.addEventListener('change', addClassToSwitchTheme);
saveCurrentThemeWhenRestartPage();
body.classList.add(Theme.LIGHT);