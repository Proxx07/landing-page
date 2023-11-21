/* Main entrypoint js */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import localization from './localization';

localization();

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
  gsap.to(item, {
    translateY: 300,
    translateX: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      end: '80% 50%',
      scrub: true,
    },
  });
});

gsap.to('.capability-item-outer', {
  opacity: 1,
  translateX: 0,
  stagger: 1,
  duration: 10,
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
    // scrub: true,
    pin: true,
  },
});

gsap.from('.for-business .content-wrapper', {
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
      markers: true,
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
      markers: true,
    },
  });
});

// start = "top, center" - top of the trigger element, center of viewport
// const timeline = gsap.timeline();
// timeline.fromTo(
//   '.main-heading',
//   {
//     y: 70,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 1.8,
//     delay: 1.2,
//   },
// ).formTo('next_animating_item'. {}, {});

// gsap.to('.square', {
//   translateY: 100,
//   opacity: 1,
//   duration: 10,
//   ease: true,
//   scrollTrigger: {
//     trigger: '.square',
//     start: 'top 70%',
//     end: 'bottom 30%',
//     markers: true,
//     scrub: true,
//     /*
//       toggleActions = play, pause, resume, restart, reset, complete, none
//       toggleActions: 'play reverse play reverse', onEnter onLeave onEnterBack onLeaveBack,
//       toggleActions: 'restart none none none',
//     */
//   },
// });

// const timeline = gsap.timeline();
// timeline
//   .to('.main-text-1', {
//     translateX: 0,
//     opacity: 1,
//     scrollTrigger: {
//       trigger: '.main-text-1',
//       start: 'top 80%',
//       end: '20% 50%',
//       scrub: true,
//     },
//   })
//   .to('.main-text-1', {
//     translateY: 300,
//     duration: 10,
//     scrollTrigger: {
//       trigger: '.main-text-2',
//       start: 'top 80%',
//       end: '80% 50%',
//       scrub: true,
//     },
//   });
