const buttons = document.querySelectorAll('.popup-trigger-btn');
const modals = document.querySelectorAll('.popup-modal');

if (buttons.length && modals.length) {
  const popupToggler = (element) => {
    element.classList.toggle('open');
    document.querySelector('html').toggleAttribute('no-scroll');

    // if (!element.classList.contains('open')) {
    //   const formWrapper = element.querySelector('.form-wrapper');
    //   if (!formWrapper) return;
    //   formWrapper.classList.remove('success');
    //   formWrapper.classList.remove('loading');
    //   formWrapper.classList.remove('error');
    // }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(`#${button.dataset.target}`);
      popupToggler(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target.closest('.body') && !e.target.classList.contains('close')) return;
      popupToggler(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('.popup-modal.open');
    if (e.keyCode === 27 && !!activeModal) {
      popupToggler(activeModal);
    }
  });
}
