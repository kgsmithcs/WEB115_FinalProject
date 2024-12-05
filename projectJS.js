// Generate Input Rows for Days
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTable = document.getElementById("mealTable");

// Dynamically create rows for days and input fields
days.forEach(day => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${day}</td>
        <td><input type="text" id="${day}-breakfast"></td>
        <td><input type="text" id="${day}-snack1"></td>
        <td><input type="text" id="${day}-lunch"></td>
        <td><input type="text" id="${day}-snack2"></td>
        <td><input type="text" id="${day}-dinner"></td>
    `;
    mealTable.appendChild(row);
});

// Generate Meal Plan
function generateMealPlan() {
    const email = document.getElementById("email").value;
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    const name = document.getElementById("name").value || "No Name Provided";
    const goal = document.getElementById("goal").value || "No Goal Provided";

    let mealPlanHTML = `
        <h1>${name}'s Weekly Meal Plan</h1>
        <p>Email: ${email}</p>
        <p>Goal: ${goal}</p>
        <table border="1">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Snack</th>
                    <th>Lunch</th>
                    <th>Snack</th>
                    <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
    `;

    days.forEach(day => {
        const breakfast = document.getElementById(`${day}-breakfast`).value || "N/A";
        const snack1 = document.getElementById(`${day}-snack1`).value || "N/A";
        const lunch = document.getElementById(`${day}-lunch`).value || "N/A";
        const snack2 = document.getElementById(`${day}-snack2`).value || "N/A";
        const dinner = document.getElementById(`${day}-dinner`).value || "N/A";

        mealPlanHTML += `
            <tr>
                <td>${day}</td>
                <td>${breakfast}</td>
                <td>${snack1}</td>
                <td>${lunch}</td>
                <td>${snack2}</td>
                <td>${dinner}</td>
            </tr>
        `;
    });

    mealPlanHTML += `</tbody></table>`;
    document.write(mealPlanHTML);
}

// Clear Planner
function clearPlanner() {
    document.querySelectorAll("input").forEach(input => (input.value = ""));
}

// Print Planner
function printPlanner() {
    window.print();
}

// Download Planner
function downloadPlanner() {
    const planner = document.body.innerHTML;
    const blob = new Blob([planner], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mealPlan.html";
    link.click();
}

