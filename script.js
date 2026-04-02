// script.js for QuizQuest Game

class Player {
    constructor(name) {
        this.name = name;
        this.position = { x: 0, y: 0 }; // Player's position
        this.score = 0;
        this.currentZone = null;
    }

    move(x, y) {
        this.position.x += x;
        this.position.y += y;
        console.log(`${this.name} moved to (${this.position.x}, ${this.position.y})`);
    }

    updateZone(zone) {
        this.currentZone = zone;
        console.log(`${this.name} entered zone: ${zone.name}`);
        if (zone.quiz) {
            this.startQuiz(zone.quiz);
        }
    }

    startQuiz(quiz) {
        console.log(`Starting quiz: ${quiz.title}`);
        // Logic to handle quiz questions and scoring
    }

    animate() {
        console.log(`${this.name} is animating!`);
        // Animation logic here
    }
}

class Zone {
    constructor(name, quiz) {
        this.name = name;
        this.quiz = quiz;
    }
}

class Quiz {
    constructor(title, questions) {
        this.title = title;
        this.questions = questions;
    }
}

// Example of creating zones, quizzes, and player
const zones = [
    new Zone('Forest', new Quiz('Forest Quiz', ['Question 1?', 'Question 2?'])),
    new Zone('Desert', new Quiz('Desert Quiz', ['Question 3?', 'Question 4?']))
];

const player = new Player('Hero');

// Example of game logic
function gameLoop() {
    player.move(1, 0); // Move player
    if (player.position.x === 2) { // Check if player is in a zone
        player.updateZone(zones[0]); // Update to Forest Zone
    }
}

// Simulate game loop execution
setInterval(gameLoop, 1000);