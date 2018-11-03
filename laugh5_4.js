/*
 * Programming Quiz: Laugh (5-4)
 */

/*TODO expressao anonima de função que armazena uma
função numa var de nome laugh e retorna a quantidade de has
que é passada como argumento */

var laugh = function (num){

var jeje = "";

for(var x= 1; x<= num; x++){

jeje = jeje + "ha";

}

return jeje + "!";

}

console.log(laugh(10));
