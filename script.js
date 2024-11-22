const songs = ['san andreas.mp3', 'experience.mp3', 'river flows.mp3'];
    const titles = ['GTA San Andreas', 'Experience', 'Rivers Flows in you'];
    let currentSong = 0;
    const audio = document.getElementById('audio');
    const currentSongTitle = document.getElementById('currentSong');

    function togglePlay() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    function prevSong() {
      currentSong = (currentSong - 1 + songs.length) % songs.length;
      updatePlayer();
    }

    function nextSong() {
      currentSong = (currentSong + 1) % songs.length;
      updatePlayer();
    }

    function updatePlayer() {
      audio.src = songs[currentSong];
      currentSongTitle.textContent = titles[currentSong];
      audio.play();
    }