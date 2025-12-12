let grades = [];

const mathGradeInput = document.getElementById('mathGrade');
const englishGradeInput = document.getElementById('englishGrade');
const submitBtn = document.getElementById('submitBtn');
const tableBody = document.getElementById('tableBody');
const mathAvgElement = document.getElementById('mathAvg');
const englishAvgElement = document.getElementById('englishAvg');
const overallAvgElement = document.getElementById('overallAvg');

submitBtn.addEventListener('click', function() {
    const mathGrade = parseFloat(mathGradeInput.value);
    const englishGrade = parseFloat(englishGradeInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid numbers!');
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    grades.push({
        math: mathGrade,
        english: englishGrade,
        average: parseFloat(average)
    });

    addRowToTable(grades.length, mathGrade, englishGrade, average);
    updateColumnAverages();

    mathGradeInput.value = '';
    englishGradeInput.value = '';
});

function addRowToTable(rowNum, math, english, avg) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rowNum}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;
    tableBody.appendChild(row);
}

function updateColumnAverages() {
    if (grades.length === 0) {
        mathAvgElement.textContent = '0.00';
        englishAvgElement.textContent = '0.00';
        overallAvgElement.textContent = '0.00';
        return;
    }

    const mathSum = grades.reduce((sum, grade) => sum + grade.math, 0);
    const mathAvg = (mathSum / grades.length).toFixed(2);

    const englishSum = grades.reduce((sum, grade) => sum + grade.english, 0);
    const englishAvg = (englishSum / grades.length).toFixed(2);

    const overallSum = grades.reduce((sum, grade) => sum + grade.average, 0);
    const overallAvg = (overallSum / grades.length).toFixed(2);

    mathAvgElement.textContent = mathAvg;
    englishAvgElement.textContent = englishAvg;
    overallAvgElement.textContent = overallAvg;
}