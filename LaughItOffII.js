/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function laugh(num){ //function with num as a parameter
    var message = ""; // will be modified within the function
        for (var x=1; x<= num; x++){ //for loop to increment the number of "ha" we want
        message = message + 'ha'; // will add  "ha" to the message
}
        return message + '!'; //returns the value of the message plus the "!"

}
    console.log(laugh(4)); //console.log shows (prints out) the return value
