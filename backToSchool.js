/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'a high school diploma';

// set the value of this based on a person's education
var salary = "";

// your code goes here

switch (education) {

case "no high school diploma":
console.log("In 2015, a person with " + education + " earned an average of $25,636/year.");
break;

case "a high school diploma":
console.log("In 2015, a person with " + education + " earned an average of $35,256/year.");
break;

case "an Associate's degree":
console.log("In 2015, a person with " + education + " earned an average of $41,496/year.");
break;

case "a Bachelor's degree":
console.log("In 2015, a person with " + education + " earned an average of $59,124/year.");
break;

case "a Master's degree":
console.log("In 2015, a person with " + education + " earned an average of $69,732/year.");
break;

case "a Professional degree":
console.log("In 2015, a person with " + education + " earned an average of $89,960/year.");
break;

case "a Doctoral degree":
console.log("In 2015, a person with " + education + " earned an average of $84,396/year.");
break;
}