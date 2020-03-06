/*//////////  Programming Fundamentals

/////////   Numbers, Strings, and Booleans (Control Flow) //

const monthlyRent = 1200;
const yearlyRent = monthlyRent * 12;


///////// Example 1
const myName = "Max";
const lastName = "Camargo";
const sentence = "Hello " + myName + " " + lastName + "! How are u!?";
const sentenceWithTemplate = `hello ${myName} ${lastName} !How are u!?`;

console.log(sentence);
console.log(sentenceWithTemplate);


///////// Example 2

const skyIsBlue = false;
if (skyIsBlue) {
    console.log("The sky is very blue :O");
} else {
    console.log("The sky is a hole, lol");
}


////////// - Number Example //

if (2 + 2 === 4) {
    console.log(
        "Ohhh, mathematics stills works."
    );
} else {
    console.log("fuckU mathematics");
}

 const friendsAtParty = 20;

 if (friendsAtParty === 0){
     console.log("more nachos for me.");
 } else if (friendsAtParty < 4) {
     console.log("need more nachos an beer.");
 } else {
     console.log("turn the music.");
 }


// - loop and while Example
///////// Example 1

 let friendsAtParty = 3;
 while (friendsAtParty > 2) {
     friendsAtParty = friendsAtParty - 1; 
 }
 console.log(friendsAtParty);

 
 // - A few shortcuts for adding one to a thing
 ///////// Example 2

 let friendAtParty = 0;
 friendsAtParty = friendsAtParty +1;
 friendsAtParty += 8;
 friendsAtParty++;
 ++friendsAtParty;

 console.log(friendsAtParty);

*/