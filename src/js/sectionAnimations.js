import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (window.innerWidth >= 1200) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    '.main-heading',
    {
      translateY: 35,
      opacity: 0,
    },
    {
      opacity: 1,
      translateY: 0,
      duration: 1.2,
      delay: 3,
    },
  );

  const mainTextBlocks = document.querySelectorAll('.main-text-blocks');
  mainTextBlocks.forEach((item) => {
    const animateItem = item.querySelector('.body');
    gsap.to(animateItem, {
      translateY: 400,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top 70%',
        end: '80% 50%',
        scrub: true,
      },
    });
  });

  gsap.to('.capability-item-outer', {
    opacity: 1,
    translateX: 0,
    stagger: 0.5,
    duration: 2,
    scrollTrigger: {
      trigger: '.capabilities',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
    },
  });

  gsap.from('.for-business .heading', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.for-business .header-wrapper',
      start: 'center center',
      end: '+=400px center',
      pin: true,
    },
  });

  gsap.from('.for-business .content-wrapper .middle-form', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.for-business .content-wrapper',
      start: 'top center',
      end: 'top center',
    },
  });

  const leftItems = document.querySelectorAll('.left-items .item');
  const rightItems = document.querySelectorAll('.right-items .item');
  leftItems.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      translateX: -100,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
  });
  rightItems.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      translateX: 100,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
  });

  gsap.from('.for-clients .section-title', {
    translateX: '-5%',
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.for-clients-inner',
      start: '-70%, center',
      toggleActions: 'play none play reverse',
    },
  });

  gsap.from('.for-clients-inner .inner', {
    translateX: '105%',
    scrollTrigger: {
      trigger: '.for-clients',
      start: '10% center',
      end: '50%, center',
      scrub: true,
    },
  });

  const clientCards = document.querySelectorAll('.for-clients .client-cards');
  gsap.from(clientCards, {
    opacity: 0.2,
    stagger: 1,
    ease: 'ease',
    scrollTrigger: {
      trigger: '.for-clients-inner',
      start: '-20% center',
      end: '+=1000px 90%',
      scrub: true,
    },
  });

  gsap.to('.for-business-backdrop', {
    opacity: 1,
    scrollTrigger: {
      trigger: '.for-clients',
      start: '100px bottom',
      end: `300px center`,
      scrub: true,
    },
  });

  gsap.to('.for-clients-backdrop', {
    opacity: 1,
    scrollTrigger: {
      trigger: '.use-cases',
      start: 'top bottom',
      end: 'center bottom',
      scrub: true,
    },
  });
} else {
  const capabilityItems = document.querySelectorAll('.capability-item-outer');
  const forBusinessItems = document.querySelectorAll('.for-business .content-wrapper .item');
  const cards = [...capabilityItems, ...forBusinessItems];
  cards.forEach((card) => card.setAttribute('card-effect', 1));
}
