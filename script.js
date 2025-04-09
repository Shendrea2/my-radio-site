// script.js – versiune optimizată pentru 149FM

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    const playButton = document.querySelector('.play-button');
    const statusText = document.getElementById('stream-status');
    const loader = document.querySelector('.loader');

    // Inițializare text și ascundere loader
    if (statusText) statusText.textContent = 'Status stream: verific...';
    if (loader) loader.style.display = 'none';

    if (!audio || !playButton) {
        console.error('Elementele audio sau playButton lipsesc din pagină.');
        return;
    }

    // Funcție de actualizare status
    const updateStatus = (text) => {
        if (statusText) statusText.textContent = text;
    };

    // Eveniment play
    playButton.addEventListener('click', () => {
        loader.style.display = 'flex';
        updateStatus('Se încarcă...');

        if (!audio.paused) {
            audio.pause();
            loader.style.display = 'none';
            updateStatus('Redarea oprită.');
            return;
        }

        audio.play()
            .then(() => {
                loader.style.display = 'none';
                updateStatus('Stream activ!');
            })
            .catch((err) => {
                loader.style.display = 'none';
                updateStatus('Stream indisponibil!');
                alert('Streamul nu este disponibil momentan. Încearcă mai târziu.');
                console.error('Eroare la redare:', err);
            });
    });

    // Tratăm eroarea nativă audio
    audio.onerror = () => {
        loader.style.display = 'none';
        updateStatus('Stream indisponibil!');
        alert('Eroare la încărcarea streamului.');
    };
});