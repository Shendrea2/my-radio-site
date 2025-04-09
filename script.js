const playButton = document.querySelector('.play-button');
const audioPlayer = document.getElementById('fallback-player');
const loader = document.getElementById('loading-circle');

let isPlaying = false;

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    loader.style.display = 'block';
    audioPlayer.play()
      .then(() => {
        isPlaying = true;
        loader.style.display = 'none';
        playButton.textContent = 'Now Playing';
        playButton.style.backgroundColor = '#28a745';
      })
      .catch((error) => {
        console.error('Eroare la redare:', error);
        loader.style.display = 'none';
        alert('Nu s-a putut porni radioul. Încearcă din nou.');
      });
  } else {
    audioPlayer.pause();
    isPlaying = false;
    playButton.textContent = 'Play Radio';
    playButton.style.backgroundColor = '#ff007f';
  }
});