const navItems = [
  ["Inicio", "index.html"],
  ["Empresa", "quienes-somos.html"],
  ["Productos", "productos.html"],
  ["Servicios", "servicios.html"],
  ["Soluciones", "soluciones.html"],
  ["Marcas", "marcas.html"],
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";

function brandMarkup() {
  return `
    <a class="brand" href="index.html" aria-label="Grupo Quantum, inicio">
      <span class="brand-mark"><img src="assets/logo-grupo-quantum.jpg" alt="" width="298" height="263" /></span>
      <span class="brand-name">Grupo Quantum</span>
    </a>`;
}

document.querySelectorAll("[data-site-header]").forEach((mount) => {
  const links = navItems
    .map(([label, href]) => `<a href="${href}"${href === currentPage ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
  mount.innerHTML = `
    <header class="site-header ${currentPage === "index.html" ? "site-header--overlay" : ""}">
      <div class="container header-inner">
        ${brandMarkup()}
        <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-nav-toggle><span></span><span></span></button>
        <nav class="site-nav" aria-label="Navegación principal" data-site-nav>
          ${links}
          <a class="header-contact" href="contacto.html">Contacto</a>
        </nav>
      </div>
    </header>`;
});

document.querySelectorAll("[data-site-footer]").forEach((mount) => {
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div>
          ${brandMarkup()}
          <p>Equipamiento, infraestructura y servicios informáticos para empresas y organismos en Argentina.</p>
        </div>
        <div>
          <p class="footer-title">Navegación</p>
          <nav class="footer-nav" aria-label="Navegación de pie">
            <a href="quienes-somos.html">Grupo Quantum</a>
            <a href="productos.html">Productos</a>
            <a href="servicios.html">Servicios</a>
            <a href="soluciones.html">Soluciones por sector</a>
          </nav>
        </div>
        <div>
          <p class="footer-title">Contacto</p>
          <nav class="footer-nav" aria-label="Datos de contacto">
            <a href="mailto:contacto@grupoquantum.ar">contacto@grupoquantum.ar</a>
            <a href="tel:+541157961639">11 5796 1639</a>
            <a href="contacto.html">Bacacay 1757, 2.º C, CABA</a>
          </nav>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Grupo Quantum</span>
        <span>Tecnología para empresas</span>
      </div>
    </footer>`;
});

const header = document.querySelector(".site-header");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");

function updateHeader() {
  if (!header || !header.classList.contains("site-header--overlay")) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  document.body.classList.toggle("menu-open", isOpen);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Abrir menú");
  document.body.classList.remove("menu-open");
}));

const motionControl = document.querySelector("[data-motion-control]");
const hero = document.querySelector(".hero");
const sceneShift = hero?.querySelector(".hero__scene-shift");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
let parallaxFrame;

function setHeroParallax(nextState) {
  if (!hero || !sceneShift) return;
  cancelAnimationFrame(parallaxFrame);
  parallaxFrame = requestAnimationFrame(() => {
    hero.style.setProperty("--scene-x", nextState.x);
    hero.style.setProperty("--scene-y", nextState.y);
    hero.style.setProperty("--scene-rotate-x", nextState.rotateX);
    hero.style.setProperty("--scene-rotate-y", nextState.rotateY);
  });
}

function resetHeroParallax() {
  setHeroParallax({ x: "0px", y: "0px", rotateX: "0deg", rotateY: "0deg" });
}

if (hero && finePointer.matches && !reducedMotion.matches) {
  hero.addEventListener("pointermove", (event) => {
    if (hero.classList.contains("is-motion-paused")) return;
    const bounds = hero.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - .5;
    const vertical = (event.clientY - bounds.top) / bounds.height - .5;
    setHeroParallax({
      x: `${(-horizontal * 18).toFixed(2)}px`,
      y: `${(-vertical * 12).toFixed(2)}px`,
      rotateX: `${(vertical * 1.1).toFixed(2)}deg`,
      rotateY: `${(-horizontal * 1.4).toFixed(2)}deg`,
    });
  });
  hero.addEventListener("pointerleave", resetHeroParallax);
}

motionControl?.addEventListener("click", () => {
  const paused = hero.classList.toggle("is-motion-paused");
  motionControl.setAttribute("aria-pressed", String(paused));
  motionControl.textContent = paused ? "Reproducir movimiento" : "Pausar movimiento";
  if (paused) resetHeroParallax();
});

const revealTargets = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
