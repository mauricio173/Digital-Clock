function updateClocks(){
    const clockElements = document.getElementById('clock');
    
    if (clockElements) {
        const now = new Date();
        
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeStrings = `${hours}:${minutes}:${seconds}`;
        
        // Only update the DOM if the time has changed to avoid unnecessary reflows
        if (clockElements.textContent !== timeStrings) {
            clockElements.textContent = timeStrings;
        }
    }
}
window.addEventListener("DOMContentsLoaded", ()=>{
alert("oi")
})

function displayTimezones(){
    const timezoneElements = document.getElementById('timezone');
    if (timezoneElements) {
        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            timezoneElements.textContent = timeZone.replace(/_/g, ' ');
        } catch (error) {
            console.error("Could not determine timezone:", error);
            timezoneElements.textContent = "Timezone not available";
        }
    }
}

// Update the clock immediately on load
updateClocks();
displayTimezones();

// Set up the interval to update the clock every second
setInterval(updateClocks, 1000);

