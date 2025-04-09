console.log("Welcome to 149FM Underground Radio");

// Inițializare când DOM-ul este complet încărcat document.addEventListener('DOMContentLoaded', () => { const playButton = document.querySelector('.play-button'); const loader = document.getElementById('loading-circle'); const fallbackAudio = document.getElementById('fallback-player'); let sound;

if (!playButton) { console.error("Butonul de play nu a fost găsit!"); return; }

playButton.addEventListener('click', () => { if (loader) loader.style.display = 'flex';

// Dezactivează fallback-ul audio implicit când folosim Howler
fallbackAudio.pause();
fallbackAudio.style.display = 'none';

if (!sound) {
  sound = new Howl({
    src: ['https://stream.zeno.fm/6vc4ddpr3ehvv'],
    html5: true,
    onplay: () => {
      console.log('Redarea a început');
      if (loader) loader.style.display = 'none';
      animatePlayButton();
    },
    onloaderror: (id, error) => {
      console.error('Eroare la încărcare:', error);
      alert('Nu s-a putut încărca fluxul audio.');
      if (loader) loader.style.display = 'none';
    },
    onplayerror: (id, error) => {
      console.error('Eroare la redare:', error);
      alert('Redarea a eșuat. Încearcă din nou.');
      if (loader) loader.style.display = 'none';
    }
  });
}

sound.play();
playButton.classList.add('playing');

});

// Efect vizual pe buton la apăsare function animatePlayButton() { playButton.classList.add('pressed'); setTimeout(() => { playButton.classList.remove('pressed'); }, 300); }

// Hover playButton.addEventListener('mouseover', () => playButton.classList.add('hovered')); playButton.addEventListener('mouseout', () => playButton.classList.remove('hovered')); });

