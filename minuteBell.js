let chosenMinuteBell;
chrome.storage.sync.get({chosenMinuteBell: "gentleX2" }, (items) => {
    chosenMinuteBell = items.chosenMinuteBell;
    var audio = new Audio("bells/"+chosenMinuteBell+".mp3");
    audio.play();
});