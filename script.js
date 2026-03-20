document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const audios = document.querySelectorAll("audio");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            const inner = box.querySelector(".inner");

            // 🎧 Stop all songs
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });

            // 🎵 Play selected song
            const songId = box.getAttribute("data-song");
            const song = document.getElementById(songId);

            if (song) {
                song.play();
            }

            // 🎴 Animation
            inner.style.animation = "none";
            inner.offsetHeight;
            inner.style.animation = "spinFlip 10s ease forwards";
        });
    });
});