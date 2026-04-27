let firstColors= colors.includes("blue");
let firstIndex= colors.indexOf("blue");
let lastIndex= colors.lastIndexOf("blue");
console.log("Final Arrays:", [firstColors, firstIndex, lastIndex]);
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");

console.log("All Teams:", allTeams);

let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);
console.log("Middle Numbers:", middleNumbers);
let spliceNumbers = numbers.splice(3, 4,60, 70);

console.log("Numbers:", numbers);
let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b).reverse();
console.log("Sorted Scores:", scores);