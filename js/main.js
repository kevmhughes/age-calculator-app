
// capture day value from input
var inputDay = document.querySelector(".input-days")
var dayValue = inputDay.addEventListener("change", (e) => {
    console.log("input day", e.target.value)
    return e.target.value  
})

console.log("test1", dayValue)

// capture month value from input
var inputMonth = document.querySelector(".input-months")
var monthValue = inputMonth.addEventListener("change", (e) => {
    console.log("input month", e.target.value)
    e.target.value
})

// capture year value from input
var inputYear = document.querySelector(".input-years")
var yearValue = inputYear.addEventListener("change", (e) => {
    console.log("input year", e.target.value)
    e.target.value
})

console.log("hey", `${monthValue}/${dayValue}/${yearValue}`)



