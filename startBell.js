let chosenStartBell;
chrome.storage.sync.get({chosenStartBell: "gentleX2" }, (items) => {
    chosenStartBell = items.chosenStartBell;
    var audio = new Audio("bells/"+chosenStartBell+".mp3");
    audio.play();
});