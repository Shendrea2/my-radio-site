// script.js
// Funcționalități pentru 149FM Radio

document.addEventListener("DOMContentLoaded", () => {
  console.log("149FM player loaded cu succes.");

  // Referință la player-ul audio
  const audioPlayer = document.querySelector('audio');

  if (audioPlayer) {
    console.log("Player-ul audio a fost găsit.");

    // Gestionarea evenimentelor de play și pause
    audioPlayer.addEventListener('play', () => {
      console.log("Redarea audio a început.");
    });

    audioPlayer.addEventListener('pause', () => {
      console.log("Redarea audio a fost întreruptă.");
    });

    // Gestionarea erorilor de redare
    audioPlayer.addEventListener('error', () => {
      alert("Player-ul audio întâmpină probleme. Verifică conexiunea sau încearcă mai târziu.");
    });
  } else {
    console.warn("Player-ul audio nu a fost găsit în pagină.");
  }

  // Funcționalitate pentru schimbarea temei (zi/noapte)
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeToggle.textContent = document.body.classList.contains('dark-theme') ? 'Temă deschisă' : 'Temă întunecată';
    });
  }

  // Formular de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log(`Nume: ${name}, Email: ${email}, Mesaj: ${message}`);
      alert(`Mulțumim, ${name}! Mesajul tău a fost trimis.`);
      contactForm.reset();
    });
  }

  // Evitarea erorii SecurityError pentru foi de stil externe
  Array.from(document.styleSheets).forEach((stylesheet) => {
    try {
      if (stylesheet.href && stylesheet.href.startsWith(window.location.origin)) {
        console.log('Rules:', stylesheet.cssRules);
      }
    } catch (error) {
      console.warn(`Nu se pot accesa regulile din: ${stylesheet.href}`, error);
    }
  });
});
