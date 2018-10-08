/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery") {
    
    weapon = "trophy";
    
} else if (room === "dining room") {
    
    weapon = "knife";
    
} else if (room === "billiards room") {

    weapon = "pool stick";
    
} else if (room === "ballroom") {

    weapon = "poison";
}

if (room === "gallery" && suspect === "Ms. Van Cleve") {
	
	solved = true;
}


if (room === "dining room" && suspect === "Mr. Parkes") {
	
	solved = true;
}

if (room === "billiards room" && suspect === "Mr. Sparr"){

	solved = true;
}


if (room === "ballroom" && suspect === "Mr. Kalehoff"){
	
	solved = true;
}


if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}