/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
name: "Joana",
friends: 39,
messages: ["hello", "how are you?", "bye"],
postMessage: function(message) {
    this.messages.push(message);
    
},
deleteMessage: function(index) {
   this.messages.splice(index,1);
    
},
addFriend: function(){
    this.friends += 1;
    
},
removeFriend: function() {
    this.friends -= 1;
}

};



facebookProfile.removeFriend();
console.log(facebookProfile.friends);
