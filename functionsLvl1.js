// Exercises

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    console.log(firstName, lastName);
}
fullName('Alex', 'Ban');

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNum(x, y) {
    console.log(x + y);
}
addNum(5,3);

// perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    const permieter = 2 * (length + width);
    console.log(permieter);
}
perimeterOfRectangle(12, 5);

// volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(lenght, width, height) {
    const vol = lenght * width * height;
    console.log(vol);
}
volumeOfRectPrism(13, 6, 4);

// Write a function which calculates a speed of a moving object, speed.
function speed(dist, time) {
    const sped = dist / time;
    console.log(sped)
}
speed(100, 5);

// body mass index
function BMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        console.log(`Your BMI is: ${bmi}. You are underweighted!`);
    } else if (bmi > 18.5 && bmi < 25) {
        console.log(`Your BMI is: ${bmi}. You are normal weighted!`);
    } else if (bmi > 25 && bmi < 30) {
        console.log(`Your BMI is: ${bmi}. You are overweighted!`);
    } else if (bmi > 30) {
        console.log(`Your BMI is: ${bmi}. You are obese!`);
    }
}
BMI(75, 1.73);