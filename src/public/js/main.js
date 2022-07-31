gsap.registerPlugin(ScrollTrigger);

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
  { y: "200%", opacity: 0, duration: 0.4, stagger: 0.08 },
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

gsap.from("main", {
  duration: 0.7,
  y: "50px",
  opacity: 0,
});

gsap.from("footer", {
  duration: 0.8,
  y: "-50px",
  opacity: 0,
  delay: 0.2,
  scrollTrigger: {
    trigger: "footer",
    start: "80px bottom",
    toggleActions: "play none none none",
  },
});

if (document.getElementById("rotate")) {
  // effect that swaps text
  gsap.registerEffect({
    name: "swapText",
    effect: (targets, config) => {
      const tl = gsap.timeline({ delay: config.delay });
      tl.to(targets, {
        y: "-20%",
        autoAlpha: 0,
        duration: config.duration / 1.2,
      });
      tl.add(() => (targets[0].innerText = config.text));
      tl.to(targets, { y: "30%", duration: 0 });
      tl.to(targets, { y: "0%", autoAlpha: 1, duration: config.duration });
      return tl;
    },
    defaults: { duration: 0.7 },
    extendTimeline: true,
  });

  const tl = gsap.timeline({ repeat: -1, delay: 0 });
  tl.swapText("#rotate", { text: "Student.", delay: 1.8 })
    .swapText("#rotate", { text: "Golfer.", delay: 1.8 })
    .swapText("#rotate", { text: "Builder.", delay: 1.8 })
    .swapText("#rotate", { text: "Movie Buff.", delay: 1.8 })
    .swapText("#rotate", { text: "Designer.", delay: 1.8 })
    .swapText("#rotate", { text: "Developer.", delay: 1.8 }); // back to the start
}
