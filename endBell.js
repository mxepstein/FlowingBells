// Define a variable to store the retrieved value
let chosenEndBell;
// Retrieve "chosenMinuteBell" from Chrome storage
chrome.storage.sync.get({chosenEndBell: "gentleX2" }, (items) => {
    chosenEndBell = items.chosenEndBell;



    //Play Sound
console.log(chosenEndBell);
var audio = new Audio("bells/"+chosenEndBell+".mp3");
audio.play();



});





