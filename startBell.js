let chosenStartBell;
chrome.storage.sync.get({chosenStartBell: "alarm",chosenVolume:90}, (items) => {
    chosenStartBell = items.chosenStartBell;
    chosenVolume = items.chosenVolume;
    var audio = new Audio("bells/"+chosenStartBell+".mp3");
    audio.volume=chosenVolume/100;
    audio.play();
});