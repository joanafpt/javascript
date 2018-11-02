/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(num) {
    
    var triangle = ""; 
    
    for(var x=1; x<= num; x++){ 
    
    makeLine(x);
    
    triangle += makeLine(x); 
    }
    return triangle;
}


// test your code by uncommenting the following line
console.log(buildTriangle(5));