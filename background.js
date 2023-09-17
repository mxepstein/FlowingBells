//GCHANGE
chrome.runtime.onInstalled.addListener(details => {


 chrome.storage.sync.set({
      chosenMinuteBell: 'alternating',
      chosenStartBell: 'alarm',
      chosenEndBell: 'train'
    }
  );


  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes() + now.getSeconds()/60;  

  var period0End        = (8 * 60)  + 35   - currentTime;
  var period1Warning    = (8 * 60)  + 44   - currentTime;
  var period1Start      = (8 * 60)  + 45   - currentTime;
  var period1End        = (9 * 60)  + 40   - currentTime;
  var period2Warning    = (9 * 60)  + 46   - currentTime;
  var period2Start      = (9 * 60)  + 47   - currentTime;
  var period2End        = (10 * 60) + 47  - currentTime;
  var period3Warning    = (10 * 60) + 53  - currentTime;
  var period3Start      = (10 * 60) + 54  - currentTime;
  var period3End        = (11 * 60) + 49  - currentTime;
  var periodLunchEnd    = (12 * 60) + 24  - currentTime;
  var period4Warning    = (12 * 60) + 30  - currentTime;
  var period4Start      = (12 * 60) + 41  - currentTime;
  var period4End        = (13 * 60) + 26  - currentTime;
  var period5Warning    = (13 * 60) + 32  - currentTime;
  var period5Start      = (13 * 60) + 33  - currentTime;
  var period5End        = (14 * 60) + 28  - currentTime;
  var period6Warning    = (14 * 60) + 34  - currentTime;
  var period6Start      = (14 * 60) + 35  - currentTime;
  var period6End        = (15 * 60) + 30  - currentTime;

  if (period0End < 0)     { period0End += 1440; }
  if (period1Warning < 0) { period1Warning += 1440; }
  if (period1Start < 0)   { period1Start += 1440; }
  if (period1End < 0)     { period1End += 1440; }
  if (period2Warning < 0) { period2Warning += 1440; }
  if (period2Start < 0)   { period2Start += 1440; }
  if (period2End < 0)     { period2End += 1440; }
  if (period3Warning < 0) { period3Warning += 1440; }
  if (period3Start < 0)   { period3Start += 1440; }
  if (period3End < 0)     { period3End += 1440; }
  if (periodLunchEnd < 0) { periodLunchEnd += 1440; }
  if (period4Warning < 0) { period4Warning += 1440; }
  if (period4Start < 0)   { period4Start += 1440; }
  if (period4End < 0)     { period4End += 1440; }
  if (period5Warning < 0) { period5Warning += 1440; }
  if (period5Start < 0)   { period5Start += 1440; }
  if (period5End < 0)     { period5End += 1440; }
  if (period6Warning < 0) { period6Warning += 1440; }
  if (period6Start < 0)   { period6Start += 1440; }
  if (period6End < 0)     { period6End += 1440; }
//GCHANGE
  chrome.alarms.create("bell0End", { delayInMinutes: 0.05, periodInMinutes: 1440 });
  chrome.alarms.create("bell1Warning", { delayInMinutes: period1Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell1Start", { delayInMinutes: period1Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell1End", { delayInMinutes: period1End, periodInMinutes: 1440 });
  chrome.alarms.create("bell2Warning", { delayInMinutes: period2Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell2Start", { delayInMinutes: period2Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell2End", { delayInMinutes: period2End, periodInMinutes: 1440 });
  chrome.alarms.create("bell3Warning", { delayInMinutes: period3Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell3Start", { delayInMinutes: period3Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell3End", { delayInMinutes: period3End, periodInMinutes: 1440 });
  chrome.alarms.create("bellLunchEnd", { delayInMinutes: periodLunchEnd, periodInMinutes: 1440 });
  chrome.alarms.create("bell4Warning", { delayInMinutes: period4Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell4Start", { delayInMinutes: period4Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell4End", { delayInMinutes: period4End, periodInMinutes: 1440 });
  chrome.alarms.create("bell5Warning", { delayInMinutes: period5Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell5Start", { delayInMinutes: period5Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell5End", { delayInMinutes: period5End, periodInMinutes: 1440 });
  chrome.alarms.create("bell6Warning", { delayInMinutes: period6Warning, periodInMinutes: 1440 });
  chrome.alarms.create("bell6Start", { delayInMinutes: period6Start, periodInMinutes: 1440 });
  chrome.alarms.create("bell6End", { delayInMinutes: period6End, periodInMinutes: 1440 });
});



chrome.alarms.onAlarm.addListener((alarm) => {
  const timestamp = new Date().getTime();
  const dayOfWeek = new Date().getDay();
//GCHANGE
  if(dayOfWeek==6 || dayOfWeek==6){
      console.log("Weekend!");
  }else
  if (alarm.name === "bell1Warning"|| 
      alarm.name === "bell2Warning"|| 
      alarm.name === "bell3Warning"|| 
      alarm.name === "bell4Warning"|| 
      alarm.name === "bell5Warning"|| 
      alarm.name === "bell6Warning"   ){
          console.log(alarm.name+" at "+timestamp);
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
          console.log(alarm.name+" at "+timestamp);
          chrome.windows.create({url:"endBell.html",focused:true,height:500,width:1},closeWindow);
  }else
  if (alarm.name === "bell1Start" || 
      alarm.name === "bell2Start" || 
      alarm.name === "bell3Start" || 
      alarm.name === "bell4Start" || 
      alarm.name === "bell5Start" || 
      alarm.name === "bell6Start"  ) {
          console.log(alarm.name+" at "+timestamp);
          chrome.windows.create({url:"startBell.html",focused:true,height:500,width:1},closeWindow);
    }
});

function closeWindow(trackWindow) {
  setTimeout(function() {chrome.windows.remove(trackWindow.id);}, 9500); //Open window and play sound for 4.5 seconds
};

