//GCHANGE
chrome.runtime.onInstalled.addListener(details => {
 chrome.storage.sync.set({
      chosenMinuteBell: 'alternating',
      chosenStartBell: 'alarm',
      chosenEndBell: 'alarm',
      chosenVolume: 90
    }
  );

  var period0End        = 1695020400000+ 8  *60*60*1000  + 35 *60*1000;
  var period1Warning    = 1695020400000+ 8  *60*60*1000  + 44 *60*1000;
  var period1Start      = 1695020400000+ 8  *60*60*1000  + 45 *60*1000;
  var period1End        = 1695020400000+ 9  *60*60*1000  + 40 *60*1000;
  var period2Warning    = 1695020400000+ 9  *60*60*1000  + 46 *60*1000;
  var period2Start      = 1695020400000+ 9  *60*60*1000  + 47 *60*1000;
  var period2End        = 1695020400000+ 10 *60*60*1000  + 47 *60*1000;
  var period3Warning    = 1695020400000+ 10 *60*60*1000  + 53 *60*1000;
  var period3Start      = 1695020400000+ 10 *60*60*1000  + 54 *60*1000;
  var period3End        = 1695020400000+ 11 *60*60*1000  + 49 *60*1000;
  var periodLunchEnd    = 1695020400000+ 12 *60*60*1000  + 24 *60*1000;
  var period4Warning    = 1695020400000+ 12 *60*60*1000  + 30 *60*1000;
  var period4Start      = 1695020400000+ 12 *60*60*1000  + 31 *60*1000;
  var period4End        = 1695020400000+ 13 *60*60*1000  + 26 *60*1000;
  var period5Warning    = 1695020400000+ 13 *60*60*1000  + 32 *60*1000;
  var period5Start      = 1695020400000+ 13 *60*60*1000  + 33 *60*1000;
  var period5End        = 1695020400000+ 14 *60*60*1000  + 28 *60*1000;
  var period6Warning    = 1695020400000+ 14 *60*60*1000  + 34 *60*1000;
  var period6Start      = 1695020400000+ 14 *60*60*1000  + 35 *60*1000;
  var period6End        = 1695020400000+ 15 *60*60*1000  + 30 *60*1000;

  chrome.alarms.create("bell0End", {when: period0End, periodInMinutes: 1440 });
  chrome.alarms.create("bell1Warning", {when: period1Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell1Start", {when: period1Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell1End", {when: period1End, periodInMinutes: 1440 });
  chrome.alarms.create("bell2Warning", {when: period2Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell2Start", {when: period2Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell2End", {when: period2End, periodInMinutes: 1440 });
  chrome.alarms.create("bell3Warning", {when: period3Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell3Start", {when: period3Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell3End", {when: period3End, periodInMinutes: 1440 });
  chrome.alarms.create("bellLunchEnd", {when: periodLunchEnd, periodInMinutes: 1440 });
  chrome.alarms.create("bell4Warning", {when: period4Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell4Start", {when: period4Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell4End", {when: period4End, periodInMinutes: 1440 });
  chrome.alarms.create("bell5Warning", {when: period5Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell5Start", {when: period5Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell5End", {when: period5End, periodInMinutes: 1440 });
  chrome.alarms.create("bell6Warning", {when: period6Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell6Start", {when: period6Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell6End", {when: period6End, periodInMinutes: 1440 }); 
});



chrome.alarms.onAlarm.addListener((alarm) => {
  const dayOfWeek = new Date().getDay();

  if(dayOfWeek==0 || dayOfWeek==6){
      console.log("Weekend!");
  }else
  if (alarm.name === "bell1Warning"|| 
      alarm.name === "bell2Warning"|| 
      alarm.name === "bell3Warning"|| 
      alarm.name === "bell4Warning"|| 
      alarm.name === "bell5Warning"|| 
      alarm.name === "bell6Warning"   ){
          chrome.windows.create({url:"minuteBell.html",focused:true,height:500,width:1},closeWindow);
  }else 
  if (alarm.name === "bell0End" || 
      alarm.name === "bell1End" || 
      alarm.name === "bell2End" || 
      alarm.name === "bell3End" ||
      alarm.name === "bellLunchEnd" || 
      alarm.name === "bell4End" || 
      alarm.name === "bell5End" || 
      alarm.name === "bell6End"  ){
          chrome.windows.create({url:"endBell.html",focused:true,height:500,width:1},closeWindow);
  }else
  if (alarm.name === "bell1Start" || 
      alarm.name === "bell2Start" || 
      alarm.name === "bell3Start" || 
      alarm.name === "bell4Start" || 
      alarm.name === "bell5Start" || 
      alarm.name === "bell6Start"  ) {
          chrome.windows.create({url:"startBell.html",focused:true,height:500,width:1},closeWindow);
    }
});


function closeWindow(trackWindow) {
  setTimeout(function() {
    try{
      chrome.windows.remove(trackWindow.id);
    }catch{
       console.log("Error: No window to close");
    }
  }, 9500); //Open window and play sound for 4.5 seconds
};

