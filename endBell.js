let chosenEndBell;
chrome.storage.sync.get({chosenEndBell: "train" }, (items) => {
    chosenEndBell = items.chosenEndBell;
    chosenVolume = items.chosenVolume;
    var audio = new Audio("bells/"+chosenEndBell+".mp3");
    audio.play();
});