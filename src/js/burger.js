const burgerMenu = () => {
  const burger = document.querySelector('.burger-js');
  const burgerContentPart = document.querySelector('.burger-content-js');
  const burgerToggler = [...document.querySelectorAll('.burger-toggle-js')];

  const burgerFooter = burger.querySelector('.footer');
  if (!burgerContentPart || !burgerToggler.length || !burger) return;
  const toggleBurger = () => {
    document.querySelector('html').toggleAttribute('no-scroll');
    burger.classList.toggle('opened');
  };

  burgerToggler.forEach((button) => {
    button.addEventListener('click', toggleBurger);
  });

  document.addEventListener('keydown', (e) => {
    if (!burger.classList.contains('opened')) return;
    if (e.keyCode === 27) {
      toggleBurger();
    }
  });

  if (window.innerWidth < 1025) {
    const footer = document.querySelector('footer.footer');
    const neoTechCopyright = footer.querySelector('.neotech-copyright');
    const menu = footer.querySelector('.footer-menu');
    const language = document.querySelector('.language');

    menu.classList.add('menu');

    burgerFooter.appendChild(neoTechCopyright);
    burgerContentPart.appendChild(menu);
    burgerContentPart.appendChild(language);
  }
};

export default burgerMenu;
