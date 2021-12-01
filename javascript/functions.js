import { gsap, TweenMax, Expo } from "gsap";

function easeIn() {
  TweenMax.to(".hamb__menu", 1, {
    y: "0",
    ease: Expo.easeIn,
  });
  TweenMax.staggerTo(
    ".hamb-btn",
    0.3,
    {
      delay: 0.4,
      x: "0",
      opacity: 1,
      ease: Expo.easeIn,
    },
    0.1
  );
  TweenMax.staggerTo(
    ".hamb-btn-two",
    0.3,
    {
      opacity: 1,
      y: "0",
      ease: easeIn,
    },
    0.1
  );
}

function easeOut() {
  TweenMax.staggerTo(
    ".hamb-btn",
    0.3,
    {
      opacity: 0,
      x: "-50vw",
      ease: Expo.easeOut,
    },
    0.1
  );

  TweenMax.staggerTo(
    ".hamb-btn-two",
    0.3,
    {
      opacity: 0,
      y: "5rem",
      ease: easeOut,
    },
    0.1
  );
  TweenMax.to(".hamb__menu", 1, {
    y: "-100%",
    delay: 0.2,
    ease: Expo.easeIn,
  });
}

export { easeIn, easeOut };
