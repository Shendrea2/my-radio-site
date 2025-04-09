console.log("Welcome to 149FM Radio!");

// Redarea audio folosind Howler.js
var sound = new Howl({
    src: ['https://stream.zeno.fm/6vc4ddpr3ehvv']
});

// Așteptăm să se încarce documentul complet
document.addEventListener('DOMContentLoaded', function () {
    // Asigură-te că există un element audio
    const audioElement = document.querySelector('audio');
    if (audioElement) {
        // Adaugă evenimentul play
        audioElement.addEventListener('play', function () {
            console.log('Radio started playing');
        });
    } else {
        console.log("Audio element not found!");
    }

    // Verifică dacă butonul de play există înainte de a adăuga evenimente
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        // Animație pe buton la click
        playButton.addEventListener('click', () => {
            playButton.style.transform = "scale(0.9)";
            setTimeout(() => {
                playButton.style.transform = "scale(1)";
            }, 300);
        });

        // Schimbarea culorii la hover
        playButton.addEventListener('mouseover', () => {
            playButton.style.backgroundColor = '#ff6347'; // Roșu tomat
        });

        playButton.addEventListener('mouseout', () => {
            playButton.style.backgroundColor = '#ff7f50'; // Oranj roșcat
        });
    } else {
        console.log("Play button not found!");
    }
});
