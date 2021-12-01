import { gsap, TweenMax, Expo, TweenLite } from "gsap";

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
