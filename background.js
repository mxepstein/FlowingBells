//Install Setup
chrome.runtime.onInstalled.addListener(details => {
 //Set Defaults
 chrome.storage.sync.set({
      chosenMinuteBell: 'alternating',
      chosenStartBell: 'alarm',
      chosenEndBell: 'alarm',
      chosenVolume: 90
    }
  );

  //Define bell times
  const midnightMillis = new Date().setHours(0, 0, 0, 0); // Milliseconds since midnight today
  var period0End        = midnightMillis+ 8  *60*60*1000  + 35 *60*1000;
  var period1Warning    = midnightMillis+ 8  *60*60*1000  + 44 *60*1000;
  var period1Start      = midnightMillis+ 8  *60*60*1000  + 45 *60*1000;
  var period1End        = midnightMillis+ 9  *60*60*1000  + 40 *60*1000;
  var period2Warning    = midnightMillis+ 9  *60*60*1000  + 46 *60*1000;
  var period2Start      = midnightMillis+ 9  *60*60*1000  + 47 *60*1000;
  var period2End        = midnightMillis+ 10 *60*60*1000  + 47 *60*1000;
  var period3Warning    = midnightMillis+ 10 *60*60*1000  + 53 *60*1000;
  var period3Start      = midnightMillis+ 10 *60*60*1000  + 54 *60*1000;
  var period3End        = midnightMillis+ 11 *60*60*1000  + 49 *60*1000;
  var periodLunchEnd    = midnightMillis+ 12 *60*60*1000  + 24 *60*1000;
  var period4Warning    = midnightMillis+ 12 *60*60*1000  + 30 *60*1000;
  var period4Start      = midnightMillis+ 12 *60*60*1000  + 31 *60*1000;
  var period4End        = midnightMillis+ 13 *60*60*1000  + 26 *60*1000;
  var period5Warning    = midnightMillis+ 13 *60*60*1000  + 32 *60*1000;
  var period5Start      = midnightMillis+ 13 *60*60*1000  + 33 *60*1000;
  var period5End        = midnightMillis+ 14 *60*60*1000  + 28 *60*1000;
  var period6Warning    = midnightMillis+ 14 *60*60*1000  + 34 *60*1000;
  var period6Start      = midnightMillis+ 14 *60*60*1000  + 35 *60*1000;
  var period6End        = midnightMillis+ 15 *60*60*1000  + 30 *60*1000;

  //If install is happening after the bell, set the alarm for tomorrow
  const now= new Date();
  if(now>period0End) period0End+=1440*60*1000;
  if(now>period1Warning) period1Warning+=1440*60*1000;
  if(now>period1Start) period1Start+=1440*60*1000;
  if(now>period1End) period1End+=1440*60*1000;
  if(now>period2Warning) period2Warning+=1440*60*1000;
  if(now>period2Start) period2Start+=1440*60*1000;
  if(now>period2End) period2End+=1440*60*1000;
  if(now>period3Warning) period3Warning+=1440*60*1000;
  if(now>period3Start) period3Start+=1440*60*1000;
  if(now>period3End) period3End+=1440*60*1000;
  if(now>periodLunchEnd) periodLunchEnd+=1440*60*1000;
  if(now>period4Warning) period4Warning+=1440*60*1000;
  if(now>period4Start) periperiod4Startod0End+=1440*60*1000;
  if(now>period4End) period4End+=1440*60*1000;
  if(now>period5Warning) period5Warning+=1440*60*1000;
  if(now>period5Start) period5Start+=1440*60*1000;
  if(now>period5End) period5End+=1440*60*1000;
  if(now>period6Warning) period6Warning+=1440*60*1000;
  if(now>period6Start) period6Start+=1440*60*1000;
  if(now>period6End) period6End+=1440*60*1000;

  //Create the alarms
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


//Ring alarms when it is time
chrome.alarms.onAlarm.addListener((alarm) => {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
  const formattedDate = currentDate.toLocaleString(undefined, options);
  const dayOfWeek = currentDate.getDay();
  if(dayOfWeek==0 || dayOfWeek==6){
      console.log("Weekend!");
  }else
  if (alarm.name === "bell1Warning"|| 
      alarm.name === "bell2Warning"|| 
      alarm.name === "bell3Warning"|| 
      alarm.name === "bell4Warning"|| 
      alarm.name === "bell5Warning"|| 
      alarm.name === "bell6Warning"   ){
          console.log(alarm.name +" - "+formattedDate)
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
        console.log(alarm.name +" - "+formattedDate)
        chrome.windows.create({url:"endBell.html",focused:true,height:500,width:1},closeWindow);
  }else
  if (alarm.name === "bell1Start" || 
      alarm.name === "bell2Start" || 
      alarm.name === "bell3Start" || 
      alarm.name === "bell4Start" || 
      alarm.name === "bell5Start" || 
      alarm.name === "bell6Start"  ) {
          console.log(alarm.name +" - "+formattedDate)
          chrome.windows.create({url:"startBell.html",focused:true,height:500,width:1},closeWindow);
    }
});

//Help close the alarm pop up window
function closeWindow(trackWindow) {
  setTimeout(function() {
    try{
      chrome.windows.remove(trackWindow.id);
    }catch(e){
       console.log("Error: No window to close");
    }
  }, 8500); //Open window and play sound for 8.5 seconds
};

