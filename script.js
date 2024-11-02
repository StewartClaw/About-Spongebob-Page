// Function to update the greeting based on time of day
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    document.getElementById('greeting').textContent = greeting;
}

// Function to update the current time
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
}

// Initial calls
updateGreeting();
updateTime();

// Update time every second
setInterval(updateTime, 1000);

// Update greeting every minute
setInterval(updateGreeting, 60000);