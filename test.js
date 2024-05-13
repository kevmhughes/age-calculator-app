// convert dates in milliseconds from 1970
var myBirthdate = new Date("02/25/1977") // Fri Feb 25 1977 00:00:00 GMT+0100 (Central European Standard Time) {}

var todaysDate = new Date ("05/13/2024") // Mon May 13 2024 00:00:00 GMT+0200 (Central European Summer Time) {}

// difference in milliseconds  
let Difference_In_Time = todaysDate.getTime() - myBirthdate.getTime(); // 1489878000000 milliseconds

// converts milliseconds to days
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); // 17244

17244 / 365 = 47.??

  


