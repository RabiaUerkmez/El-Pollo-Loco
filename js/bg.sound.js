sound = false;
music = new Audio('audio/bgAudio.mp3');
music.volume = 0.1;


/**
 * Pauses the Backgroundmusic.
 */

function initBody() {
    music.pause(); 
}

/**
 * Switches the background music & sound.
 */

function mute() {
    if (!sound) {
        this.music.pause();
        this.sound = true;
        document.getElementById('change-speaker').style.backgroundImage = "url('img/pause.png')";
    } else if (sound) {
        this.music.play();
        this.sound = false;
        document.getElementById('change-speaker').style.backgroundImage = "url('img/play.png')";
    }
}