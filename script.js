console.log("Welcome to 149FM Radio!");

// Redarea audio folosind Howler.js
const sound = new Howl({
    src: ['https://stream.zeno.fm/6vc4ddpr3ehvv'],
    html5: true, // Asigură compatibilitatea cu fluxurile streaming
    onplay: () => console.log('Radio started playing'),
    onloaderror: (id, error) => console.error('Error loading audio:', error),
    onplayerror: (id, error) => {
        console.error('Error playing audio:', error);
        alert('Unable to play the audio stream. Please try again later.');
    }
});

// Funcție pentru a inițializa evenimentele legate de butonul play
function initializePlayButton() {
    const playButton = document.querySelector('.play-button');

    if (!playButton) {
        console.log("Play button not found!");
        return;
    }

    // Eveniment pentru redarea audio
    playButton.addEventListener('click', () => {
        sound.play();
        playButton.classList.add('playing'); // Adăugăm o clasă pentru stiluri dinamice
        console.log('Play button clicked');
    });

    // Animație pe buton la click
    playButton.addEventListener('mousedown', () => {
        playButton.classList.add('pressed');
    });

    playButton.addEventListener('mouseup', () => {
        playButton.classList.remove('pressed');
    });

    // Schimbarea culorii la hover folosind clase CSS
    playButton.addEventListener('mouseover', () => {
        playButton.classList.add('hovered');
    });

    playButton.addEventListener('mouseout', () => {
        playButton.classList.remove('hovered');
    });
}

// Inițializare generală la încărcarea paginii
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document fully loaded');
    initializePlayButton();
});