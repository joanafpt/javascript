/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

var one = "Hi, my name is";
var firstName = "Julia";
var two = "I love";
var interest = "cats";
var three = "In my spare time, I like to";
var hobby = "videogames";
var point = ".";
var awesomeMessage = one + ' ' + firstName + point + ' ' + two + ' ' + interest + point + ' ' + three + ' ' + hobby + point;

console.log(awesomeMessage);