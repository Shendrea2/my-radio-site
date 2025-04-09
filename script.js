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
