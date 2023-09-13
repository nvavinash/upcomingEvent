function updateCountdown() {
    const secondsElement = document.querySelector(".timeSeconds .number");
    const minutesElement = document.querySelector(".timeMinutes .number");
    const hoursElement = document.querySelector(".timeHours .number");
    const daysElement = document.querySelector(".timeDays .number");

    let secValue = 12,
        minValue = 60,
        hoursValue = 2,
        dayValue = 9;

    const timeFunction = setInterval(() => {
        secValue--;
        if (secValue === 0) {
            minValue--;
            secValue = 60;
        }
        if (minValue === 0) {
            hoursValue--;
            minValue = 60;
        }
        if (hoursValue === 0) {
            dayValue--;
            hoursValue = 2; // You may want to set hoursValue to 24 if it represents hours in a day.
        }
        if (dayValue === 0) {
            clearInterval(timeFunction);
        }

        secondsElement.textContent = secValue < 10 ? `0${secValue}` : secValue;
        minutesElement.textContent = minValue < 10 ? `0${minValue}` : minValue;
        hoursElement.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
        daysElement.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
    }, 1000); // Use 1000 milliseconds for a second-based countdown
}

// Call the function to start the countdown
updateCountdown();
