// dark mode and light mode switch
function switchTheme() {
    const toggleSwitch = document.querySelector('.toggle-input');
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const capsule = document.querySelector('.capsule');
  
    if (toggleSwitch.checked) {
      html.setAttribute('data-theme', 'light');
      body.setAttribute('data-theme', 'light');
      capsule.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      body.setAttribute('data-theme', 'dark');
      capsule.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-input');
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const capsule = document.querySelector('.capsule');
  
    toggleSwitch.addEventListener('change', switchTheme);
  
    // Get the user's theme preference from localStorage
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      html.setAttribute('data-theme', userTheme);
      body.setAttribute('data-theme', userTheme);
      capsule.setAttribute('data-theme', userTheme);
      if (userTheme === 'light') {
        toggleSwitch.checked = true;
      }
    } else {
      // Set the theme based on the OS preference
      const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      html.setAttribute('data-theme', osTheme);
      body.setAttribute('data-theme', osTheme);
      capsule.setAttribute('data-theme', osTheme);
      localStorage.setItem('theme', osTheme);
      toggleSwitch.checked = osTheme === 'light';
    }
  });

function message() {
    console.log('Message me:');
    console.log('https://m.me/tomas.mozdren.1');
    console.log('https://t.me/beangreen247');
    console.log('https://twitter.com/beangreen247');
    console.log('https://www.instagram.com/beangreen247/');
    console.log('https://steamcommunity.com/id/BeanGreen247/');
    console.log('For more links visit https://linktr.ee/BeanGreen247');
    console.log('luv u...');
}

function rekt() {
    console.log('REKTARDIN');
    console.log('an absolute gigachad');
    console.log('luv him...');
}