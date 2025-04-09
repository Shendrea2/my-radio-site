document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to 149FM Radio!");

    const playButton = document.querySelector('.play-button');

    if (!playButton) {
        console.error("Butonul de play nu a fost găsit!");
        return;
    }

    let sound; // Declară variabila sound în scopul global al funcției

    playButton.addEventListener('click', () => {
        if (!sound) {
            sound = new Howl({
                src: ['https://stream.zeno.fm/6vc4ddpr3ehvv'],
                html5: true,
                onplay: () => console.log('Redarea a început'),
                onloaderror: (id, error) => console.error('Eroare la încărcarea audio:', error),
                onplayerror: (id, error) => {
                    console.error('Eroare la redarea audio:', error);
                    alert('Nu se poate reda fluxul audio. Vă rugăm să încercați din nou mai târziu.');
                }
            });
        }
        sound.play();
        playButton.classList.add('playing');
        console.log('Butonul de play a fost apăsat');
    });

    // Gestionarea animațiilor și a schimbărilor de stil
    playButton.addEventListener('mousedown', () => playButton.classList.add('pressed'));
    playButton.addEventListener('mouseup', () => playButton.classList.remove('pressed'));
    playButton.addEventListener('mouseover', () => playButton.classList.add('hovered'));
    playButton.addEventListener('mouseout', () => playButton.classList.remove('hovered'));
});