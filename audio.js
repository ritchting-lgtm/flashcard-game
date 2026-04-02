// audio.js

// QuizQuest Sound Management

const AudioManager = {
    sounds: {},

    loadSound: function(name, url) {
        const audio = new Audio(url);
        this.sounds[name] = audio;
    },

    playSound: function(name) {
        if (this.sounds[name]) {
            this.sounds[name].play();
        } else {
            console.warn(`Sound ${name} not found.`);
        }
    },

    stopSound: function(name) {
        if (this.sounds[name]) {
            this.sounds[name].pause();
            this.sounds[name].currentTime = 0;
        }
    }
};

// Example usage:
// AudioManager.loadSound('correct', 'path/to/correct-sound.mp3');
// AudioManager.playSound('correct');