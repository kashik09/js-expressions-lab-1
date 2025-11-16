const tempsF = [
  day1TempF,
  day3TempF,
  day5TempF,
  day7TempF,
  day9TempF,
  day11TempF,
  day13TempF,
  day15TempF,
  day17TempF,
  day19TempF,
  day21TempF,
  day23TempF,
  day25TempF,
  day27TempF,
  day29TempF,
];

const tempsC = [
  day2TempC,
  day4TempC,
  day6TempC,
  day8TempC,
  day10TempC,
  day12TempC,
  day14TempC,
  day16TempC,
  day18TempC,
  day20TempC,
  day22TempC,
  day24TempC,
  day26TempC,
  day28TempC,
  day30TempC,
];

// Fahrenheit

let tot_temperature_in_fahrenheit = 0;

for (let i = 0; i < tempsF.length; i++) {
  tot_temperature_in_fahrenheit += tempsF[i];
}

for (let i = 0; i < tempsC.length; i++) {
  tot_temperature_in_fahrenheit =
    tot_temperature_in_fahrenheit + cToF(tempsC[i]);
}

// Celsius

let tot_temperature_in_celsius = 0;

for (let i = 0; i < tempsC.length; i++) {
  tot_temperature_in_celsius += tempsC[i];
}

for (let i = 0; i < tempsF.length; i++) {
  tot_temperature_in_celsius =
    tot_temperature_in_celsius + fToC(tempsF[i]);
}

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;


console.log(
    {
        tot_temperature_in_fahrenheit,
        tot_temperature_in_celsius,
        avg_temperature_in_fahrenheit,
        avg_temperature_in_celsius,
    }
);
