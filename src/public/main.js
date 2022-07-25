const openMenu = gsap.timeline({
  paused: "true",
});

openMenu.to("header nav", {
  duration: 0.7,
  x: "0%",
  ease: Expo.easeInOut,
});

openMenu.from(
  "header nav a",
  { x: "-200%", opacity: 0, duration: 0.4, stagger: 0.08 },
  "<0.2"
);

document.getElementById("open-btn").addEventListener("click", () => {
  openMenu.play(0);
});

document.getElementById("close-btn").addEventListener("click", () => {
  gsap.to("header nav", {
    duration: 0.7,
    x: "-100%",
    ease: Expo.easeInOut,
  });
});

if (document.querySelector("article")) {
  gsap.from("article", {
    duration: 0.9,
    y: "50px",
    opacity: 0,
  });
}
