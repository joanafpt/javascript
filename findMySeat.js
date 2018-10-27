/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

var x = 0; // row

var y = 0; // seat

for (x = 0; x <= 25; x ++) // in each row there are 99 seats

    for (y = 0; y <= 99; y ++){
        
        console.log (x + "-" + y);
    }
    