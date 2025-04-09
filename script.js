console.log("Welcome to 149FM Radio!");

// Inițializare la încărcarea documentului
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    const loader = document.getElementById('loading-circle');
    let sound; // va fi definit la prima apăsare

    if (!playButton) {
        console.error("Butonul de play nu a fost găsit!");
        return;
    }

    playButton.addEventListener('click', () => {
        // Afișează loaderul înainte de a începe redarea
        if (loader) loader.style.display = 'block';

        // Inițializează playerul doar o dată
        if (!sound) {
            sound = new Howl({
                src: ['https://stream.zeno.fm/6vc4ddpr3ehvv'],
                html5: true, // important pentru stream live
                onplay: () => {
                    console.log('Redarea a început');
                    if (loader) loader.style.display = 'none';
                },
                onloaderror: (id, error) => {
                    console.error('Eroare la încărcare:', error);
                    alert('Nu s-a putut încărca fluxul audio.');
                    if (loader) loader.style.display = 'none';
                },
                onplayerror: (id, error) => {
                    console.error('Eroare la redare:', error);
                    alert('Nu se poate reda fluxul audio. Încearcă din nou.');
                    if (loader) loader.style.display = 'none';
                }
            });
        }

        // Pornește redarea
        sound.play();
        playButton.classList.add('playing');
    });

    // Efecte de interacțiune
    playButton.addEventListener('mousedown', () => playButton.classList.add('pressed'));
    playButton.addEventListener('mouseup', () => playButton.classList.remove('pressed'));
    playButton.addEventListener('mouseover', () => playButton.classList.add('hovered'));
    playButton.addEventListener('mouseout', () => playButton.classList.remove('hovered'));
});