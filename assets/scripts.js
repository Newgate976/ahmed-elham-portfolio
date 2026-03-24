//Faire apparaitre les sections
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    console.log("scroll détecté");
    cards.forEach(card => {
    const position = card.getBoundingClientRect();

    if (position.top < window.innerHeight - 100) {
        card.classList.add("visible");
        console.log(position.top);
    }
  });
});

const projets = [
  { titre: "Portfolio", desc: "..."},
];

const menuBtn = document.querySelector(".btn");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

"Développeur Full Stack..."

// LightMode
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);

  btn.textContent = theme === "light" ? "🌙" : "☀️";
});

const saved_theme = localStorage.getItem("theme");

if (saved_theme === "light") {
  document.body.classList.add("light");
  btn.textContent = "🌙";
} else{
  btn.textContent = "☀️"};