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





// LightMode
const btn = document.getElementById("theme-toggle");

const updateIcon = () => {
  const isLight = document.body.classList.contains("light");
  btn.textContent = isLight ? "🌙" : "☀️";
};

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);

  updateIcon();
});

const saved_theme = localStorage.getItem("theme");

if (saved_theme === "light") {
  document.body.classList.add("light");
}

updateIcon();