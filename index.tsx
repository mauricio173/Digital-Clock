function updateClock(): void {
    const clockElement = document.getElementById('clock');
    
    if (clockElement) {
        const now = new Date();
        
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Only update the DOM if the time has changed to avoid unnecessary reflows
        if (clockElement.textContent !== timeString) {
            clockElement.textContent = timeString;
        }
    }
}

function displayTimezone(): void {
    const timezoneElement = document.getElementById('timezone');
    if (timezoneElement) {
        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            timezoneElement.textContent = timeZone.replace(/_/g, ' ');
        } catch (error) {
            console.error("Could not determine timezone:", error);
            timezoneElement.textContent = "Timezone not available";
        }
    }
}

// Update the clock immediately on load
updateClock();
displayTimezone();

// Set up the interval to update the clock every second
setInterval(updateClock, 1000);
