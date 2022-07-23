const animation = gsap.timeline({
  paused: "true",
});

animation.to("header nav", {
  duration: 0.5,
  x: "0%",
  ease: Expo.easeInOut,
});

animation.fromTo(
  "header nav a",
  { x: "-100%", opacity: 0 },
  { duration: 0.4, opacity: 1, x: "0%", stagger: 0.05 }
);

document.getElementById("open-btn").addEventListener("click", () => {
  animation.play();
});

document.getElementById("close-btn").addEventListener("click", () => {
  animation.reverse();
});
