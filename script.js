console.log("Welcome to 149FM Radio!");
<script src="https://cdn.jsdelivr.net/npm/howler@2.2.0/dist/howler.min.js"></script>
<script>
    var sound = new Howl({
        src: ['http://91.99.52.93/listen/149fm/radio.mp3']
    });
    sound.play();
</script>
document.addEventListener('DOMContentLoaded', function () {
    const audioElement = document.querySelector('audio');
    audioElement.addEventListener('play', function () {
        console.log('Radio started playing');
    });
});
// Animație pe butonul de ascultare la click
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
    playButton.style.transform = "scale(0.9)";
    setTimeout(() => {
        playButton.style.transform = "scale(1)";
    }, 300);
});

// Schimbarea culorii la hover pentru butonul de ascultare
playButton.addEventListener('mouseover', () => {
    playButton.style.backgroundColor = '#ff6347';
});

playButton.addEventListener('mouseout', () => {
    playButton.style.backgroundColor = '#ff7f50';
});
