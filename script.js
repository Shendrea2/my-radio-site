console.log("Welcome to 149FM Radio!");
<script src="https://cdn.jsdelivr.net/npm/howler"></script>
<script>
    var sound = new Howl({
        src: ['https://stream.zeno.fm/6vc4ddpr3ehvv']
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
