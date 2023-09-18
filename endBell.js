let chosenEndBell;
chrome.storage.sync.get({chosenEndBell: "train",chosenVolume:90 }, (items) => {
    chosenEndBell = items.chosenEndBell;
    chosenVolume = items.chosenVolume;
    var audio = new Audio("bells/"+chosenEndBell+".mp3");
    audio.volume=chosenVolume/100;
    audio.play();
});