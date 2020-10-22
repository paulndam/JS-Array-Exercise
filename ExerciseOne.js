// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.


var grades = [[55, 75, 65, 90], [80, 85, 50, 55]];
var total = 0;
var average = 0.0

for (var i = 0; i < grades.length; i++){
    for (var j = 0; j < grades[i].length; j++){
        total += grades[i][j];

    }

    average = total / grades[i].length;
    console.log(" Grades Result " + parseInt(i + 1) + " Average Grade ===> " + average.toFixed(2));



}

// second way of approaching this method

function calculateAverage() {
    this.Grades = [[]]; // property
    this.add = add; // function
    this.averageT = averageT; // function
}


function add(grades) {
    this.Grades.push(grades)
}

function averageT() {
    var total = 0;
    for (var i = 0; i < this.Grades.length; i++){
        total += this.Grades[i]
    }

    return total / this.Grades.length;
}

var testGrades = new calculateAverage();
testGrades.add(79);
testGrades.add(66);
testGrades.add(96);

console.log(" Average Result is :-> " + testGrades.averageT(0.0).toFixed(2));

var homewrkGrades = new calculateAverage();
homewrkGrades.add(49);
homewrkGrades.add(86);
homewrkGrades.add(36);

console.log(" HomeWork Average Result is :-> " + homewrkGrades.averageT(0.0).toFixed(2));





// Store a set of words in an array and display the contents both forward and backward.

var clubsName = ["barca", "ManU", "liverpool", "roma"]
clubsName.reverse();
console.log(" Reverse Order " + " ======> " + clubsName);
clubsName.sort();
console.log(" Not Reverse Order " + " ======> "  + clubsName);


// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.


// function Temp() {

//     this.data = [];
//     this.add = add;
//     this.average = average;

// }

// function add(temp) {
//     this.data.push(temp);
// }

// function averageX() {
//     var total = 0;
//     for (var i = 0; i < this.data.length; i++){
//         total += this.data[i];
//     }

//     return total / this.data.length;
// }

// var theWeekTemp = new Temp();
// theWeekTemp.add(45);
// theWeekTemp.add(55);
// theWeekTemp.add(65);
// console.log(" Current week temp is " + parseInt(i + 1) + theWeekTemp.averageX(0).toFixed(2));




// Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

var sentence = "The greatest football player of all time is the messiah lionel messi";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++){
    console.log("Single word Display " + i + " ==> " + words[i]);
}
