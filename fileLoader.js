// fileLoader.js

// This module handles the loading and parsing of quiz files for the flashcard game.

const fs = require('fs');
const path = require('path');

/**
 * Load quiz file from the specified path.
 * @param {string} filePath - The path to the quiz file.
 * @returns {Promise<Array>} - A promise that resolves to an array of quiz data.
 */
function loadQuizFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const quizzes = parseQuizData(data);
            resolve(quizzes);
        });
    });
}

/**
 * Parse quiz data from the raw string.
 * @param {string} data - The raw quiz data string.
 * @returns {Array} - An array of parsed quiz objects.
 */
function parseQuizData(data) {
    const lines = data.split('\n');
    const quizzes = [];

    for (const line of lines) {
        const parts = line.split(',');
        if (parts.length >= 2) {
            const quiz = { question: parts[0].trim(), answer: parts[1].trim() };
            quizzes.push(quiz);
        }
    }

    return quizzes;
}

module.exports = { loadQuizFile };