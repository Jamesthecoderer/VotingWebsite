// Load saved votes from localStorage or start fresh
let votes = JSON.parse(localStorage.getItem("votes")) || {
    "Act 1": 0,
    "Act 2": 0,
    "Act 3": 0,
    "Act 4": 0
};

// Function to update votes and redirect
function vote(act) {
    votes[act]++;  // Increase the vote count
    localStorage.setItem("votes", JSON.stringify(votes)); // Save updated votes
    window.location.href = "results.html"; // Redirect to results page after voting
}

// Attach event listeners to vote buttons
document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', () => {
        let act = button.getAttribute('data-act');
        vote(act);
    });
});