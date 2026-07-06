document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  initRevealOnScroll();
  initReadingProgress();
  initHeroParallax();
});

function initRevealOnScroll() {
  const elements = document.querySelectorAll(".fade-up");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8%",
      threshold: 0.08,
    },
  );

  elements.forEach((element) => observer.observe(element));
}

function initReadingProgress() {
  const progressBar = document.querySelector("[data-reading-progress]");
  if (!progressBar) return;

  let ticking = false;

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initHeroParallax() {
  const hero = document.querySelector(".hero");
  const layers = hero?.querySelectorAll("[data-hero-speed]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!hero || !layers?.length || reduceMotion.matches) return;

  let ticking = false;

  const update = () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
    const travel = progress * 86;

    layers.forEach((layer) => {
      const speed = Number.parseFloat(layer.dataset.heroSpeed) || 0;
      const offset = travel * speed;
      const axis = layer.dataset.heroAxis;

      layer.style.setProperty("--hero-x", axis === "x" ? `${offset}px` : "0px");
      layer.style.setProperty("--hero-y", axis === "x" ? "0px" : `${offset}px`);
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}
