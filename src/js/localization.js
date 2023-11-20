import languages from './languages';

const localization = () => {
  const language = document.querySelector('.language');
  if (!language) return;

  const currentLang = language.querySelector('.lang-title');
  const languageButtons = language.querySelectorAll('.lang-buttons button');

  const changeLanguages = () => {
    const ln = localStorage.getItem('lang') || 'ru';
    const languageKeys = !languages[ln] ? languages.ru : languages[ln];

    Object.keys(languageKeys).forEach((key) => {
      const item = document.querySelector(`[data-ln=${key}]`);
      if (process.env.NODE_ENV === 'production' && (!languageKeys[key] || !item)) return;
      item.innerHTML = languageKeys[key];
    });

    currentLang.textContent = [...languageButtons].filter((btn) => btn.dataset.key === ln)[0].textContent; //eslint-disable-line
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('.language')) return;
    language.classList.remove('opened');
  });

  currentLang.addEventListener('click', () => {
    language.classList.toggle('opened');
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('lang', button.dataset.key);
      changeLanguages();
      language.classList.remove('opened');
    });
  });

  if (localStorage.getItem('lang') !== 'ru') {
    changeLanguages();
  }
};

export default localization;
