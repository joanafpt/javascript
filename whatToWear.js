/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 20;
var shirtLength = 29;
var shirtSleeve = 8.38;

// Write your if/else code here


if ((shirtWidth >= 18 && shirtWidth <= 19.99) && (shirtLength >= 28 && shirtLength <= 28.99) && (shirtSleeve >= 8.13 && shirtSleeve <= 8.379)){
console.log("S");
}

else if ((shirtWidth >= 20 && shirtWidth <= 21.99) && (shirtLength >= 29 && shirtLength <= 29.99) && (shirtSleeve >= 8.38 && shirtSleeve <= 8.62 )){
console.log("M");
}

else if ((shirtWidth >= 22 && shirtWidth <= 23.99) && (shirtLength >= 30 && shirtLength <= 30.99) && (shirtSleeve >= 8.63 && shirtSleeve <= 8.87)){
console.log("L");
}

else if ((shirtWidth >= 24 && shirtWidth <= 25.99) && (shirtLength >= 31 && shirtLength <= 32.99) && (shirtSleeve >= 8.88 && shirtSleeve <= 9.62)){
console.log("XL");
}

else if ((shirtWidth >= 26 && shirtWidth <= 27.99) && (shirtLength >= 33 && shirtLength <= 33.99) && (shirtSleeve >= 9.63 && shirtSleeve <= 10.129)){
console.log("2XL");
}

else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)){
console.log("3XL");
}

else 

{
console.log("N/A");
}