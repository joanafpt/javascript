/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var madLib = madLib1  + adjective1 + madLib2 +  adjective2 + madLib3 +  adjective3  + madLib4;
var madLib1 = 'The Intro to JavaScript course is';
var adjective1 = 'amazing';
var madLib2 = 'James and Julia are so';
var adjective2 = 'fun';
var madLib3 = 'I cannot wait to work through the rest of this' ;
var adjective3 = 'entertaining';
var madLib4 = 'content!';

console.log(madLib1 + ' ' + adjective1  + '.' + ' ' + madLib2 + ' ' + adjective2 + '.' + ' ' + madLib3 + ' '+ adjective3 + ' ' + madLib4);
