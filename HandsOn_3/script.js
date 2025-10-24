// --- Inputs --- //
const project = document.getElementById("project");
const quiz = document.getElementById("quiz");
const midterm = document.getElementById("midterm");
const finals = document.getElementById("finals");
const activities = document.getElementById("activities");

// --- Processes --- //
const reqs = [project, quiz, midterm, finals, activities];
let scores = [];

// --- Outputs --- //
const averageOutput = document.getElementById("average");
const remarksOutput = document.getElementById("remarks");

// --- Functions --- //
const getScores = () => {
    scores = reqs.map(input => parseFloat(input.value) || 0);
    return scores;
};

const getAverage = () => {
    const total = scores.reduce((a, b) => a + b, 0);
    return total;
};

const getRemarks = (average) => {
    return average >= 74 ? "Passed" : "Failed";
};

const displayResults = (average, remarks) => {
    averageOutput.value = average.toFixed(2);
    remarksOutput.value = remarks;
};

const calculateGrades = () => {
    getScores();
    const avg = getAverage();
    const remarks = getRemarks(avg);
    displayResults(avg, remarks);
};