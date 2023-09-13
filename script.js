// function updateCountdown() {
//     const secondsElement = document.querySelector(".timeSeconds .number");
//     const minutesElement = document.querySelector(".timeMinutes .number");
//     const hoursElement = document.querySelector(".timeHours .number");
//     const daysElement = document.querySelector(".timeDays .number");

//     let secValue = 12,
//         minValue = 60,
//         hoursValue = 10,
//         dayValue = 6;

//     const timeFunction = setInterval(() => {
//         secValue--;
//         if (secValue === 0) {
//             minValue--;
//             secValue = 60;
//         }
//         if (minValue === 0) {
//             hoursValue--;
//             minValue = 60;
//         }
//         if (hoursValue === 0) {
//             dayValue--;
//             hoursValue = 2; // You may want to set hoursValue to 24 if it represents hours in a day.
//         }
//         if (dayValue === 0) {
//             clearInterval(timeFunction);
//         }

//         secondsElement.textContent = secValue < 10 ? `0${secValue}` : secValue;
//         minutesElement.textContent = minValue < 10 ? `0${minValue}` : minValue;
//         hoursElement.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
//         daysElement.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
//     }, 1000); // Use 1000 milliseconds for a second-based countdown
// }

// // Call the function to start the countdown
// updateCountdown();
function updateCountdown() {
    const secondsElement = document.querySelector(".timeSeconds .number");
    const minutesElement = document.querySelector(".timeMinutes .number");
    const hoursElement = document.querySelector(".timeHours .number");
    const daysElement = document.querySelector(".timeDays .number");

    // Set the target date and time in IST (September 19, 2023, 00:00:00 IST)
    const targetDate = new Date("2023-09-19T00:00:00Z"); // Note: "Z" denotes UTC time
    targetDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

    const timeFunction = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            // Countdown has reached or passed the target date
            clearInterval(timeFunction);
            secondsElement.textContent = "00";
            minutesElement.textContent = "00";
            hoursElement.textContent = "00";
            daysElement.textContent = "00";
        } else {
            // Calculate the remaining time in seconds, minutes, hours, and days
            const totalSeconds = Math.floor(timeDifference / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours / 24);

            const seconds = totalSeconds % 60;
            const minutes = totalMinutes % 60;
            const hours = totalHours % 24;
            const days = totalDays;

            // Update the countdown elements
            secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
            minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
            daysElement.textContent = days < 10 ? `0${days}` : days;
        }
    }, 1000); // Update every 1 second
}

// Call the function to start the countdown
updateCountdown();
