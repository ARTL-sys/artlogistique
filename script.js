// Sélection des éléments
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Événement clic
menuToggle.addEventListener("click", () => {
  // Animation du bouton
  menuToggle.classList.toggle("active");

  // Ouverture/Fermeture du menu latéral
  navLinks.classList.toggle("show");

  // Ajoute le fond flou
  document.body.classList.toggle("menu-open");
});

/*
  Objectif : valider le formulaire sans recharger la page.
  addEventListener('submit') intercepte l’envoi du formulaire.
*/

document.getElementById('myForm').addEventListener('submit', e => {
  e.preventDefault(); // empêche le rechargement automatique
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message');

  if (name === "" || !email.includes('@')) {
    msg.textContent = "Veuillez remplir correctement tous les champs.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Formulaire envoyé avec succès ✅";
    msg.style.color = "green";
  }
});
