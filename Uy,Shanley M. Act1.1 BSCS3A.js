// ==========================================
// 3 VARIABLES
// ==========================================
let totalScore = 0;
const passingScore = 70;
var quizTitle = "JavaScript Fundamentals Quiz";

// ==========================================
// 3 ARRAYS
// ==========================================
const studentNames = ["Shanley", "John Roque", "Mark Anthony", "Mark"];
const rawScores = [85, 62, 95, 45];
const performanceCategories = ["Excellent", "Pass", "Fail"];

// ==========================================
// 3 CONDITIONALS
// ==========================================

// Condition 1: Check if the quiz is active/valid
if (quizTitle.length > 0) {
  console.log(`Starting evaluations for: ${quizTitle}`);
} else {
  console.log("No quiz title assigned.");
}

// Condition 2: Evaluate the top score
if (rawScores[2] >= 90) {
  console.log(`Top Student (${studentNames[2]}) performance: ${performanceCategories[0]}`);
} else {
  console.log("Top score was under 90.");
}

// Condition 3: Evaluate individual passing status
if (rawScores[0] >= passingScore) {
  console.log(`${studentNames[0]} has passed the quiz.`);
} else {
  console.log(`${studentNames[0]} has failed the quiz.`);
}

// ==========================================
// 3 LOOPS
// ==========================================

// Loop 1: Standard 'for' loop to display student results
console.log("\n--- Individual Results ---");
for (let i = 0; i < studentNames.length; i++) {
  console.log(`Student: ${studentNames[i]} | Score: ${rawScores[i]}`);
}

// Loop 2: 'for...of' loop to calculate total score
console.log("\n--- Score Calculation ---");
for (let score of rawScores) {
  totalScore += score;
}
let averageScore = totalScore / rawScores.length;
console.log(`Total Score Combined: ${totalScore}`);
console.log(`Class Average: ${averageScore}`);

// Loop 3: 'while' loop to process passing scores from an array copy
console.log("\n--- Processing Passing Scores ---");
let scoresQueue = [...rawScores]; // Copy of array

while (scoresQueue.length > 0) {
  let currentScore = scoresQueue.shift();
  if (currentScore >= passingScore) {
    console.log(`Verified Passing Score: ${currentScore}`);
  }
}