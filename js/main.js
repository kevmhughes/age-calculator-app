// <<<<< Step 1a: CHECK TO SEE IF VALID ON SUBMIT >>>>>
function checkValidity() {
  // INPUTS
  let userDate = document.querySelector(".input-days").value;
  let userMonth = document.querySelector(".input-months").value;
  let userYear = document.querySelector(".input-years").value;

  if (userDate > 0 && userDate < 32) {
    days = userDate;
  } else {
    document.querySelector(".input-days").style.borderColor = "red"
    document.querySelector(".error-days").style = "display:inline"
  }

  if (userMonth > 0 && userMonth < 13) {
    months = userMonth;
  } else {
    document.querySelector(".input-months").style.borderColor = "red"
    document.querySelector(".error-months").style = "display:inline"
  }

  if (userYear > 1900 && userYear <= new Date().getFullYear() && new Date(`${userMonth}/${userDate}/${userYear}`).getTime() < new Date().getTime()) {
    years = userYear;
  } else {
    document.querySelector(".input-years").style.borderColor = "red"
    document.querySelector(".error-years").style = "display:inline"
  }
  getDifferenceBetweenCurrentDateAndInputtedDate(days, months, years);
}

// <<<<< Step 1b: CHECK TO SEE IF VALID ON CHANGE >>>>>

var input = document.querySelector(".input-days");
// CALLS FUNCTION ON CHANGE (DAYS)
input.addEventListener("change", (e) => {
    checkDaysOnChange(e)
  });

  var input = document.querySelector(".input-months");
// CALLS FUNCTION ON CHANGE (MONTH)
input.addEventListener("change", (e) => {
    checkMonthsOnChange(e)
  });

  var input = document.querySelector(".input-years");
// CALLS FUNCTION ON CHANGE (YEAR)
  input.addEventListener("change", (e) => {
      checkYearsOnChange(e)
    });

function checkDaysOnChange(e) {
  if (e.target.value > 0 && e.target.value < 32 ) {
      document.querySelector(".input-days").style.borderColor = "hsl(0, 0%, 86%)"
      document.querySelector(".error-days").style = "display:none"
  } else {
      document.querySelector(".input-days").style.borderColor = "red"
      document.querySelector(".error-days").style = "display:inline"
  }

}

function checkMonthsOnChange(e) {
  if (e.target.value > 0 && e.target.value < 13 ) {
      document.querySelector(".input-months").style.borderColor = "hsl(0, 0%, 86%)"
      document.querySelector(".error-months").style = "display:none"
  } else {
      document.querySelector(".input-months").style.borderColor = "red"
      document.querySelector(".error-months").style = "display:inline"
  }

}

function checkYearsOnChange(e) {
  if (e.target.value > 1900 && e.target.value <= new Date().getFullYear()) {
      document.querySelector(".input-years").style.borderColor = "hsl(0, 0%, 86%)"
      document.querySelector(".error-years").style = "display:none"
  } else {
      document.querySelector(".input-years").style.borderColor = "red"
      document.querySelector(".error-years").style = "display:inline"
  }

}

// <<<<< Step 2: (if check passed): GET DIFFERENCE BETWEEN 2 DATES CONVERTED TO MS  >>>>>
function getDifferenceBetweenCurrentDateAndInputtedDate(
  days,
  months,
  years
) {
  // CURRENT DATE
  var currentDateInMs = new Date().getTime();
  // INPUTTED DATE - put into correct format
  var userDateToBeChecked = `${months}/${days}/${years}`;
  var userDateinMS = new Date(userDateToBeChecked).getTime();
  // DIFFERENCE BETWEEN 2 DATES
  var differenceBetweenTwoDatesInMS = currentDateInMs - userDateinMS;

  convertDifferenceIntoDaysMonthsAndYear(differenceBetweenTwoDatesInMS);
}

// <<<<< Step 3: CONVERT DIFFERENCE IN MS TO YEARS, MONTHS & DAYS >>>>>
function convertDifferenceIntoDaysMonthsAndYear(differenceBetweenTwoDatesInMS) {
  var totalDays = Math.round(
    differenceBetweenTwoDatesInMS / 1000 / 60 / 60 / 24
  );
  var outputYears = Math.floor(totalDays / 365);
  var outputMonths = Math.floor((totalDays % 365) / 30);
  var outputDays = (totalDays % 365) % 30;

  addToHtml(outputYears, outputMonths, outputDays);

  // animation
  animate(outputDays, outputMonths, outputYears)
}

// <<<<< Step 4: ADD TO HTML >>>>>
function addToHtml(outputYears, outputMonths, outputDays) {
  document.querySelector("#output-years").textContent = outputYears;
  document.querySelector("#output-months").textContent = outputMonths;
  document.querySelector("#output-days").textContent = outputDays;

  convertPluralsToSingular(outputDays, outputMonths, outputYears)
}

// <<<<< Step 5: CONVERTS PLURALS TO SINGULAR (years => year, etc.) >>>>>
function convertPluralsToSingular(outputDays, outputMonths, outputYears) {
  if (outputYears == 1) {
    document.querySelector("#text-output-years").textContent = "year";
  }
  if (outputMonths == 1) {
    document.querySelector("#text-output-months").textContent = "month";
  }
  if (outputDays == 1) {
    document.querySelector("#text-output-days").textContent = "day";
  }
}

var btn = document.querySelector(".calculator__user-input-btn");
// ON SUBMIT
btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidity();
  animate()
});


/////////////////////// Step 6: animation

function animate(outputDays, outputMonths, outputYears){
  for (let i = 0; i <= outputDays; i++) {
    setTimeout(function(){
      document.querySelector("#output-days").textContent = i
  },i*50)
  }
  for (let i = 0; i <= outputMonths; i++) {
    setTimeout(function(){
      document.querySelector("#output-months").textContent = i
  },i*50)
  }
  for (let i = 0; i <= outputYears; i++) {
    setTimeout(function(){
      document.querySelector("#output-years").textContent = i
  },i*50)
  }
}




