const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('#body');


 const addClassToSwith = () => {
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

const currentTheme = () => {
    const themeStorage = localStorage.getItem('siteTheme');
  
        if (themeStorage === 'true') {
            body.classList.add(Theme.DARK);
            toggle.checked = true;
        }
        else {
          body.classList.add(Theme.LIGHT);  

    }
    }

toggle.addEventListener('change', addClassToSwith);
currentTheme();
