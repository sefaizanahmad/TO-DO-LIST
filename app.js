const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add task function
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add close button to each task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the '×' symbol
        li.appendChild(span);
    }
    inputBox.value = ''; // Clear the input box after adding the task
    saveData(); // Save updated list to localStorage
}

// Event listener for handling clicks on the list
listContainer.addEventListener("click", function(e) {
    // Toggle checked class on clicking the task (li element)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected the case: classList
        saveData(); // Save updated state to localStorage
    }
    // Remove task on clicking the close button (span element)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Corrected: parentElement.remove()
        saveData(); // Save updated list to localStorage
    }
}, false);

// Save the list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save the HTML structure of the list
}

// Show saved tasks from localStorage when the page is loaded
function showTask() {
    let savedTasks = localStorage.getItem("data");
    if (savedTasks) { // If there's saved data, load it into the list container
        listContainer.innerHTML = savedTasks;
    }
}

// Initialize tasks on page load
showTask();
