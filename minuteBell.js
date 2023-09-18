let chosenMinuteBell;
chrome.storage.sync.get({chosenMinuteBell: "alternating",chosenVolume:75}, (items) => {
    chosenMinuteBell = items.chosenMinuteBell;
    chosenVolume = items.chosenVolume;
    var audio = new Audio("bells/"+chosenMinuteBell+".mp3");
    audio.volume=chosenVolume/100;
    audio.play();
});