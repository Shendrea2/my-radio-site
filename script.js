// script.js
const streamURL = "https://stream.zeno.fm/6vc4ddpr3ehvv";
const audio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const status = document.getElementById("status");

// Preîncărcare stream doar la click
let streamInitialized = false;

playBtn.addEventListener("click", () => {
  if (!streamInitialized) {
    audio.src = streamURL;
    streamInitialized = true;
  }

  if (audio.paused) {
    audio.play().then(() => {
      status.textContent = "Status stream: în direct";
      playBtn.textContent = "Oprește Radio";
    }).catch((e) => {
      console.error("Nu se poate reda streamul:", e);
      alert("Streamul nu este disponibil momentan. Încearcă mai târziu.");
    });
  } else {
    audio.pause();
    status.textContent = "Status stream: oprit";
    playBtn.textContent = "Ascultă Live";
  }
});

// Test conexiune la stream (verificare HEAD)
fetch(streamURL, { method: "HEAD" })
  .then(res => {
    if (res.ok) {
      status.textContent = "Status stream: disponibil";
    } else {
      status.textContent = "Status stream: indisponibil";
    }
  })
  .catch(() => {
    status.textContent = "Status stream: indisponibil";
  });
