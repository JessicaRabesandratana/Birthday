
const annee = 2026;
const mois = 9; // Octobre : les mois commencent à 0
const jourAnniversaire = 27;

const calendrier = document.getElementById("calendar-days");

if (calendrier) {
  calendrier.innerHTML = "";

  // Jour de la semaine du premier jour du mois
  const premierJour = new Date(annee, mois, 1).getDay();

  // Nombre total de jours du mois
  const nombreJours = new Date(annee, mois + 1, 0).getDate();

  // Le calendrier commence le lundi
  const decalage = (premierJour + 6) % 7;

  // Cases vides avant le 1er octobre
  for (let i = 0; i < decalage; i++) {
    const espace = document.createElement("div");
    espace.classList.add("calendar-empty");
    calendrier.appendChild(espace);
  }

  // Création des dates
  for (let jour = 1; jour <= nombreJours; jour++) {
    const caseJour = document.createElement("div");

    caseJour.classList.add("calendar-day");
    caseJour.textContent = jour;

    // Anniversaire : 27 octobre
    if (jour === jourAnniversaire) {
      caseJour.classList.add("birthday");
      caseJour.textContent = "♥ " + jour + " ♥";
      caseJour.title = "HBD Mirantsoa!";
    }

    calendrier.appendChild(caseJour);
  }
}


document.addEventListener("DOMContentLoaded", () => {

    // Bouton dans index.html
    const birthdayButton = document.getElementById("birthdayButton");

    if (birthdayButton) {
        birthdayButton.addEventListener("click", () => {
            window.location.href = "surprise.html";
        });
    }

    // Animation dans surprise.html
   

const cake = document.getElementById("cake-image");
const birthdayImage = document.getElementById("birthdayImage");

if (cake && birthdayImage) {
    cake.addEventListener("animationend", function (event) {
        if (event.animationName === "cake-appear") {

            // Garder le gâteau visible pendant 2 secondes
            setTimeout(() => {
                cake.style.display = "none";

                // Afficher la photo
                birthdayImage.classList.add("show");

                // Attendre 3 secondes avant le message
                setTimeout(() => {
                    window.location.href = "message.html";
                }, 3000);

            }, 1000);
        }
    });
}
});


