// MATH EXPRESSIONS
// Assignment # 6

// Q1
// var a = 10;
// document.write("Result: <br>");

// document.write("The value of a is: ", a , "<br>");

// document.write("-------------------------- <br>");

// document.write("The value of ++a is: ", ++a , "<br>");

// document.write("Now the value of a is: ", a , "<br> <br>");

// document.write("The value of a++ is: ", a++ , "<br>");
// document.write("Now the value of a is: ", a , "<br> <br>");


// document.write("The value of --a is: ", --a , "<br>");
// document.write("Now the value of a is: ", a , "<br> <br>");

// document.write("The value of a-- is: ", a-- , "<br>");
// document.write("Now the value of a is: ", a , "<br> <br>");


// Q2
// var a =2, b=1;
// var result = --a - --b + ++b + b--;

// document.write("result is ", result);

// Q3
// var userName = prompt("Enter your name");
// alert("Welcome "+ userName);

// Q5
// var number = +prompt ("Enter number for multiplication");
// document.write(number," x 1 = ", number*1, "<br>", number," x 2 = ", number*2, "<br>", number," x 3 = ", number*3, "<br>", number," x 4 = ", number*4, "<br>", number," x 5 = ", number*5, "<br>", number," x 6 = ", number*6, "<br>", number," x 7 = ", number*7, "<br>", number," x 8 = ", number*8, "<br>", number," x 9 = ", number*9, "<br>", number," x 10 = ", number*10
// );

// Q6
// a)
var sub1 = prompt ("Enter subject 1");
var sub2 = prompt ("Enter subject 2");
var sub3 = prompt ("Enter subject 3");

// b)
var totalMarks = 100;

// c)
var obtainedMarks1 = +prompt ("Enter your "+ sub1+ " marks");

// d)
var obtainedMarks2 = +prompt ("Enter your "+ sub2+ " marks");
var obtainedMarks3 = +prompt ("Enter your "+ sub3+ " marks");

// e)
document.write(`<table>
    <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>
    </tr><tr><td>${sub1}</td><td>${totalMarks}</td><td>${obtainedMarks1}</td><td>${(obtainedMarks1/totalMarks)*100}</td></tr>
    <tr><td>${sub2}</td><td>${totalMarks}</td><td>${obtainedMarks2}</td><td>${(obtainedMarks2/totalMarks)*100}</td></tr>
    <tr><td>${sub3}</td><td>${totalMarks}</td><td>${obtainedMarks3}</td><td>${(obtainedMarks3/totalMarks)*100}</td></tr>

    <tr><td>}</td><td>${totalMarks*3}</td><td>${obtainedMarks1+obtainedMarks2+obtainedMarks3}</td><td>${((obtainedMarks1+obtainedMarks2+obtainedMarks3)/300)*100}</td></tr>
    </table>`)
