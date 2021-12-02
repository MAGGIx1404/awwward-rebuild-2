import { gsap, TweenMax, Expo, TweenLite } from "gsap";
import preloadImages from "./utils";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// scroll init
const scroll__container = document.getElementById("scroll__container");

const scroller = new LocomotiveScroll({
  el: scroll__container, //scroll element (scroll container)
  smooth: true, // smooth scroll enabled
  getDirection: true, // display scoll direction (up & down)
  lerp: 0.01, //scroll smoothness
  smartphone: {
    lerp: 0.5,
    smooth: true, //smooth scroll enabled for mobile
  },
  tablet: {
    lerp: 0.5,
    smooth: true, //smooth scroll enabled for tablet & ipad
  },
  offset: [0, 0],
  useKeyboard: true,
  getSpeed: true,
  class: "is-inview",
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
  draggingClass: "has-scroll-dragging",
  smoothClass: "has-scroll-smooth",
  initClass: "has-scroll-init",
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  scrollFromAnywhere: false,
});

window.addEventListener("load", function () {
  scroller.init();
  scroller.update();
});

scroller.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(scroll__container, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scroll__container").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => scroller.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// hamb-animation

function hambAnimation() {
  let hamb__btn = document.getElementById("hamb__btn");
  let close__btn = document.getElementById("close-btn");

  hamb__btn.addEventListener("click", function () {
    startIn();
  });
  close__btn.addEventListener("click", function () {
    endIn();
  });

  function startIn() {
    TweenMax.to(".hamb__menu", 1, {
      y: "0%",
      ease: Expo.easeIn,
    });

    TweenMax.staggerTo(
      ".hamb-btn",
      0.5,
      {
        delay: 0.2,
        x: "0%",
        opacity: 1,
        ease: Expo.easeIn,
      },
      0.1
    );
    TweenMax.staggerTo(
      ".hamb-btn-two",
      0.5,
      {
        delay: 0.4,
        y: "0%",
        opacity: 1,
        ease: Expo.easeIn,
      },
      0.1
    );
  }

  function endIn() {
    TweenMax.to(".hamb__menu", 1, {
      y: "-100%",
      delay: 0.6,
      ease: Expo.easeOut,
    });

    TweenMax.staggerTo(
      ".hamb-btn",
      0.5,
      {
        x: "-50vw",
        opacity: 0,
        ease: Expo.easeOut,
      },
      0.1
    );
    TweenMax.staggerTo(
      ".hamb-btn-two",
      0.5,
      {
        y: "4rem",
        opacity: 0,
        ease: Expo.easeOut,
      },
      0.1
    );
  }
}

hambAnimation();

// on top

const banner = document.getElementById("banner");

document.querySelector("#logo__btn").addEventListener("click", function () {
  scroller.scrollTo(banner);
});
