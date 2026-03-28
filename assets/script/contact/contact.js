(function() {
  emailjs.init("z6K85uSZncko-rdaI");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_elham976",
    "template_lurqh75",
    this
  )
  .then(() => {
    alert("Message envoyé ✅");
    this.reset();
  })
  .catch((error) => {
    console.log(error);
    alert("Erreur ❌");
  });
});