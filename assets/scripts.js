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

localStorage