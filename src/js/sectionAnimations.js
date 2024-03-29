import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (window.innerWidth >= 1280) {
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
      trigger: '.for-business',
      start: 'top center',
      end: 'top center',
    },
  });

  gsap.from('.for-business .heading', {
    scrollTrigger: {
      trigger: '.for-business .header-wrapper',
      start: 'center center',
      end: '+=50% center',
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

  const clientsInner = document.querySelector('.for-clients-inner .inner');
  clientsInner.setAttribute('style', `--width: ${clientsInner.clientWidth}px`);
  gsap.to(clientsInner, {
    translateX: clientsInner.clientWidth * -1,
    scrollTrigger: {
      trigger: '.for-clients',
      start: '10% center',
      end: '80%, center',
      scrub: true,
    },
  });

  const clientCards = document.querySelectorAll('.for-clients .client-cards');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.for-clients',
      start: '18% center',
      end: '50%, center',
      scrub: true,
    },
  });

  tl.to(clientCards, {
    stagger: 1,
    opacity: 1,
  });
  tl.to(clientCards, {
    stagger: 1,
    opacity: 0.2,
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
