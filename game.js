// QuizQuest Game Logic

class QuizQuest {
    constructor() {
        this.questions = [];
        this.score = 0;
        this.currentQuestionIndex = 0;
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    start() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.askQuestion();
    }

    askQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const question = this.questions[this.currentQuestionIndex];
            // Logic to display the question to the player
            console.log(question.text);
            // Logic to handle player's answer
        } else {
            this.endGame();
        }
    }

    answerQuestion(answer) {
        const question = this.questions[this.currentQuestionIndex];
        if (question.correctAnswer === answer) {
            this.score++;
        }
        this.currentQuestionIndex++;
        this.askQuestion();
    }

    endGame() {
        console.log(`Game Over! Your score is: ${this.score}`);
    }
}

module.exports = QuizQuest;