/* Main entrypoint js */
import localization from './localization';
import burgerMenu from './burger';
import './sectionAnimations.js';
import './popup.js';

localization();
burgerMenu();

const toggleMenuItems = (hash) => {
  const menuItems = document.querySelectorAll('.footer-menu > li > a');
  const locationHash = hash || document.location.hash;
  menuItems.forEach((item) => {
    if (locationHash === item.getAttribute('href')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};
const sections = document.querySelectorAll('section');
// eslint-disable-next-line
const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return;
  const sectionID = entries[0].target.getAttribute('id');
  if (sectionID) {
    toggleMenuItems(`#${sectionID}`);
  }
});
sections.forEach((section) => observer.observe(section));
