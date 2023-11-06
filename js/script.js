let initialDay = '';
let initialMonth = '';
let initialYear = ''; 

// Set today Day, Month and Year to temp
const today = new Date();
const tempDay = today.getDate();
const tempMonth = today.getMonth() + 1;
const tempYear = today.getFullYear();

function setValue() {
    // Set input value to initial 
    initialDay = document.getElementById("day").value;
    initialMonth = document.getElementById("month").value;
    initialYear = document.getElementById("year").value;

    // If input is valid run agecalculator()
    if (isValid()) {
        ageCalculator();
    }
}

function isValid() {
    reset(); // Reset input border color, label text color and remove error messages

    let dayIsValid = false;
    let monthIsValid = false;
    let yearIsValid = false;
    
    // Check if day input is missing and/or invalid
    if (initialDay == '') 
        missingInput("day");
    else if (initialDay < 1 | initialDay > 31) 
        invalidValue("day");
    else 
        dayIsValid = true;
    
    // Check if month input is missing and/or invalid
    if (initialMonth == '') 
        missingInput("month");
    else if (initialMonth < 1 | initialMonth > 12) 
        invalidValue("month");
    else 
        monthIsValid = true;

    // Check if year input is missing and/or invalid
    if (initialYear == '') 
        missingInput("year");
    else if (initialYear < 1800 | initialYear > tempYear) 
        invalidValue("year");
    else 
        yearIsValid = true;

    // If every input are valid return true
    if (dayIsValid == true && monthIsValid == true && yearIsValid == true) {
        return true;
    }
    return false;
}

function missingInput(input) {
    // Change input border color and label text to red
    document.getElementById(input).style.borderColor = "var(--lightred)";
    document.getElementById(input + 'Label').style.color = "var(--lightred)";

    // Display missing error message for day/month/year
    document.getElementById(input + "Missing").classList.add("display");
}

function invalidValue(input) {
    // Change input border color and label text to red
    document.getElementById(input).style.borderColor = "var(--lightred)";
    document.getElementById(input + 'Label').style.color = "var(--lightred)";

    // Display invalid error message for day/month/year
    document.getElementById(input + "Invalid").classList.add("display");
}

function reset() {
    // Reset border color of day/month/year input
    Array.from(document.getElementsByClassName("dateInput")).map((input) => {
        input.style.borderColor = "";
    });

    // Reset color of day/month/year label
    Array.from(document.getElementsByClassName("dateLabel")).map((label) => {
        label.style.color = "";
    });

    // Hide the missing and invalid day/month/year error message
    Array.from(document.getElementsByClassName("error")).map((error) => {
        error.classList.remove("display");
    });
}

function ageCalculator() {
    // Set age to current year/month/day minus the input value
    let ageDay = Number(tempDay - initialDay);
    let ageMonth = Number(tempMonth - initialMonth);
    let ageYear = Number(tempYear - initialYear);

    // If day is negative remove one month and add 31 days
    if (ageDay < 0) {
        ageMonth -= 1;
        ageDay += 31;
    }

    // If month is negative remove one year and add 12 months
    if (ageMonth < 0) {
        ageYear -= 1;
        ageMonth += 12; 
    }

    // Show the age instead of --
    document.getElementById("dd").innerHTML = ageDay;
    document.getElementById("mm").innerHTML = ageMonth;
    document.getElementById("yyyy").innerHTML = ageYear;
}