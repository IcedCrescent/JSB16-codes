const songPlayer = document.getElementById("song");
const coverImg = document.getElementById("cover");
const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const playPauseBtn = document.getElementById("play-pause");
const nextSongBtn = document.getElementById("next-song");

let isPlaying = false;
let currentSongIndex = 0;
let mySongs = [
    {
        name: "Senorita",
        artist: "Shawn Mendes - Camila Cabello",
        cover: "./assets/img/106207.jpg",
        song: "./assets/music/Senorita - Shawn Mendes_ Camila Cabello.mp3"
    },
    {
        name: "Một cú lừa",
        artist: "Bích Phương",
        cover: "./assets/img/121626.jpg",
        song: "./assets/music/Mot Cu Lua - Bich Phuong.mp3"
    },
];

playPauseBtn.addEventListener("click", function(e) {
    if (isPlaying) {
        playPauseBtn.innerHTML = "▶";
        songPlayer.pause();
    } else {
        playPauseBtn.innerHTML = "⏸";
        songPlayer.play();
    }
    isPlaying = !isPlaying;
});

nextSongBtn.onclick = function(e) {
    currentSongIndex++;
    if (currentSongIndex >= mySongs.length) {
        currentSongIndex = 0;
    }
    songPlayer.src = mySongs[currentSongIndex].song;
    coverImg.src = mySongs[currentSongIndex].cover;
    songName.innerHTML = mySongs[currentSongIndex].name;
    artistName.innerHTML = mySongs[currentSongIndex].artist;
    isPlaying = true;
    songPlayer.play();
    playPauseBtn.innerHTML = "⏸";
}
