// capture day value from input

var btn = document.querySelector('.calculator__user-input-btn')

btn.addEventListener('click', (e) => {
    // console.log('qué entra en la función flecha del evento??? ')
    // var inputDay = document.querySelector('.input-days').value
    // console.log('inputDay :' + inputDay);
    captureAndValidateValues();
});

function captureAndValidateValues () {

    //capturar
    var inputDay = document.querySelector('.input-days').value
    console.log('inputDay :' + inputDay);
    var inputMonth = document.querySelector('.input-months').value
    console.log('inputMonth :' + inputMonth);
    var inputYear = document.querySelector('.input-years').value
    console.log('inputYear :' + inputYear);
    
    //invocar función comparación
    differenceBetweenCurrentDateAndInputDate(inputDay, inputMonth, inputYear);

    //validar
};

function differenceBetweenCurrentDateAndInputDate (inputDay, inputMonth, inputYear) {

    // obtener fecha actual en milisegundos con getTime()
    var currentDate = new Date()
    var currentDateMS = currentDate.getTime()
    console.log( 'currentDate :' + currentDate)
    console.log( 'currentDateMS :' + currentDateMS)

    // fecha de entrada en formato mm dd yyyy
    var inputDate = `${inputMonth}-${inputDay}-${inputYear}`
    console.log( 'inputDate :' + inputDate)

    // fecha de entrada en formato timestamp
    var inputDateFormat = new Date(inputDate);
    console.log( 'inputDateFormat :' + inputDateFormat)

    // fecha de entrada en Milisegundos
    var inputDateFormatMS = new Date(inputDate).getTime();
    console.log( 'inputDateFormatMS :' + inputDateFormatMS)

    // comparar fechas en milisegundos
    var differenceBetweenDatesMS = currentDateMS - inputDateFormatMS ;
    console.log('differenceBetweenDatesMS :' + differenceBetweenDatesMS)

    formatDifferenceBetweenDates (differenceBetweenDatesMS)
}

function formatDifferenceBetweenDates (differenceBetweenDatesMS) {
    
    // console.log('new log differenceBetweenDatesMS :' + differenceBetweenDatesMS)

    //obtener la cantidad de dias del total de milisegundos
    var totalDays = Math.floor(differenceBetweenDatesMS / 1000 / 60 / 60 / 24);
    console.log('totalDays :' + totalDays)

    //obtener la cantidad de años del total de días
    var years = Math.floor(totalDays / 365);
    console.log('years :' + years)

    //obtener la cantidad de meses del total de meses en días
    var totalMonths = Math.floor(totalDays / 30.5);
    console.log('totalMonths :' + totalMonths)
    var months = totalMonths - years * 12

    //obtener la cantidad de días restantes
    var days = totalDays - months * 30.5 - ((years * 12 )* 30.5);


    addToHtml(years, months, days);
};

function addToHtml (years, months, days){

    console.log(' new log years :' + years + months)

    document.querySelector('#output-years').textContent = years
    console.log('outputYear :' + years);
    
    document.querySelector('#output-months').textContent = months
    console.log('outputMonth :' + months);

    document.querySelector('#output-days').textContent = days
    console.log('outputDay :' + days);

};
