// Check if a given year is a Leap Year

console.log("---------------------------------------------");
console.log("Leap Year Check");


var givenYear = 2024;

let leapYear = (year) =>((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);


if (leapYear(givenYear)){
  console.log(`${givenYear} is a leap year.`);
}
else {
  console.log(`${givenYear} - Not a leap year.`);
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Temperature Conversion - Fahrenheit and Centigrades
console.log("---------------------------------------------");
console.log("---------------------------------------------");
console.log("Temeperature Conversion");


let c = 60;
let f = 45;


console.log(`${c}°F is ${ConvertIntoFahrenheit(c)}°C`);

console.log(`${f}°F is ${ConvertIntoCentigrade(f)}°C`);


// Convert Fahrenheit into Centigrade
function ConvertIntoCentigrade(fahrenheit)
{
  // Formula
  // c = 5/9 (f-32)
  return 5/9 * (fahrenheit-32)
}

//Convert Centigrade into Fahrenheit
function ConvertIntoFahrenheit(centigrade){
  // Formula
  // f = 9/5c + 32;
  return (9/5 * centigrade) + 32;
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

console.log("---------------------------------------------");
console.log("---------------------------------------------");
console.log("Factorial Calculation");

let num = 5;

let factorial = (num) => {
  if(num == 1)
  {
  return num;
  }
  else
  {
  return num * factorial( num-1 );
  }
}

console.log(`The factorial of the number ${num} is: ${factorial(num)}`);



console.log("------- Assignment End ---------------------");









