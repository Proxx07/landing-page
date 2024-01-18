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
  menuItems.forEach((item) => item.classList.toggle('active', locationHash === item.getAttribute('href')));
};
const sections = document.querySelectorAll('section');
const sectionsBounds = {};

sections.forEach((section) => {
  const { id } = section;
  if (id) sectionsBounds[id] = [section.offsetTop, section.offsetTop + section.offsetHeight];
});

window.addEventListener('scroll', () => {
  const scrollVal = window.scrollY + window.innerHeight - 100;
  const currentBlockID = Object.keys(sectionsBounds)
    .filter((key) => scrollVal >= sectionsBounds[key][0] && scrollVal < sectionsBounds[key][1] && key)
    .at(-1);
  if (currentBlockID) {
    toggleMenuItems(`#${currentBlockID}`);
  }
});

const form = document.querySelector('.callback-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = {};

  form.querySelectorAll('[name]').forEach((field) => {
    fields[field.attributes.name.value] = field.value;
  });

  // fetch fields
});
