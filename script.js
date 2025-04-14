// script.js
// Funcționalități pentru 149FM Radio

// Verificăm dacă documentul este încărcat complet
document.addEventListener("DOMContentLoaded", () => {
  console.log("149FM player loaded cu succes.");

  // Referință la elementul audio
  const audioPlayer = document.querySelector('audio');

  // Verificare dacă elementul audio există
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
      console.error("A apărut o problemă cu redarea audio.");
      alert("Player-ul audio întâmpină probleme. Verifică conexiunea sau încearcă mai târziu.");
    });
  } else {
    console.warn("Player-ul audio nu a fost găsit în pagină.");
  }

  // Funcționalitate pentru schimbarea temei (zi/noapte)
  const themeToggle = document.querySelector('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      console.log("Tema a fost schimbată.");
    });
  }

  // Alte funcționalități pot fi adăugate aici
});
