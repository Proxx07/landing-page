import IMask from 'imask'; // eslint-disable-line
import localization from './localization';
import burgerMenu from './burger';
import './sectionAnimations.js';
import './popup.js';
import $request from './request.js';
import MySelect from './select.js';

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

const formWrapper = document.querySelector('.form-wrapper');
const form = formWrapper.querySelector('.callback-form');
const errorsList = formWrapper.querySelector('.error-list');
const formFields = form.querySelectorAll('[name]');

const phoneField = form.querySelector('[name="phone"]');
const maskOptions = { mask: '+{998}(00)000-00-00' };
const mask = IMask(phoneField, maskOptions);

const selectField = document.querySelector('.select-field');
const select = new MySelect(selectField);

select.init();

phoneField.addEventListener('keyup', () => {
  if (!phoneField.value) phoneField.value = '+998';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fields = {};

  formFields.forEach((field) => {
    if (field.attributes.name.value === 'subject') {
      fields[field.attributes.name.value] = +field.value;
      return;
    }

    if (field.attributes.name.value === 'phone') {
      fields[field.attributes.name.value] = mask.unmaskedValue;
      return;
    }

    fields[field.attributes.name.value] = field.value;
  });

  formWrapper.classList.remove('error');
  formWrapper.classList.remove('success');
  formWrapper.classList.add('loading');

  const result = await $request.post('/landing/feedback', fields);

  formWrapper.classList.remove('loading');

  if (result.statusCode < 300) {
    errorsList.innerHTML = '';
    formFields.forEach((field) => {
      field.value = '';
      if (field.tagName.toLocaleLowerCase() === 'select') {
        if (!field.closest('.custom-select')) return;
        const selectTitle = field.closest('.custom-select').querySelector('.custom-select__title');
        selectTitle.textContent = field.querySelector('option[disabled][hidden]').innerText;
        selectTitle.dataset.ln = field.querySelector('option[disabled][hidden]').dataset.ln;
      }
    });
    form.remove();
    formWrapper.classList.remove('error');
    formWrapper.classList.add('success');
  } else {
    formWrapper.classList.remove('success');
    formWrapper.classList.add('error');

    const list = Array.isArray(result.message) ? result.message.map((str) => `<div>${str}</div>`).join('') : result.message;

    errorsList.innerHTML = list;
  }
});
