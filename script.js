console.log("149FM Status Checker Initialized");

document.addEventListener('DOMContentLoaded', () => { const playButton = document.querySelector('.play-button'); const loader = document.getElementById('loading-circle'); const fallbackAudio = document.getElementById('fallback-player'); const liveStatus = document.getElementById('live-status'); let sound;

async function checkStreamStatus() { try { const res = await fetch('https://stream.zeno.fm/6vc4ddpr3ehvv', { method: 'HEAD' }); return res.ok; } catch (e) { console.error("Nu s-a putut verifica statusul streamului.", e); return false; } }

async function handlePlay() { if (loader) loader.style.display = 'flex';

const streamActive = await checkStreamStatus();

if (!streamActive) {
  if (loader) loader.style.display = 'none';
  alert('Streamul nu este disponibil momentan. Încearcă mai târziu.');
  liveStatus.textContent = 'OFFLINE';
  liveStatus.style.color = 'gray';
  return;
}

liveStatus.textContent = 'LIVE';
liveStatus.style.color = '#00ff00';

fallbackAudio.pause();
fallbackAudio.style.display = 'none';

if (!sound) {
  sound = new Howl({
    src: ['https://stream.zeno.fm/6vc4ddpr3ehvv'],
    html5: true,
    onplay: () => {
      console.log('Redarea a început');
      if (loader) loader.style.display = 'none';
      playButton.classList.add('playing');
    },
    onloaderror: (id, err) => {
      console.error('Eroare la încărcare:', err);
      if (loader) loader.style.display = 'none';
      alert('Nu s-a putut încărca fluxul audio.');
    },
    onplayerror: (id, err) => {
      console.error('Eroare la redare:', err);
      if (loader) loader.style.display = 'none';
      alert('Redarea a eșuat. Încearcă din nou.');
    }
  });
}

sound.play();

}

playButton.addEventListener('click', handlePlay); });

