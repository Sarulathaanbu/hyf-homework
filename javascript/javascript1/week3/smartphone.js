////////////////////Adding activities////////////////////
const activities = [];

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration
  });
}
addActivity("23/7-18", "Youtube", 30);
addActivity("22/7-18", "Facebook", 40);
addActivity("22/7-18", "Whatsapp", 50);
console.log(activities);

///////////////////////Show my status///////////////////////////////
function showTotalDuration(activities) {
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration = totalDuration + activities[i].duration;
  }
  console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`);
}


////////////////////////Usage limit///////////////////////////
let totalDuration = showTotalDuration(activities)

function maxLimit(timeLimit) {
  if (totalDuration > timeLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}
maxLimit(100);

////////////////////Total Time Spent On Each Activity/////////////
function getActivityDuration(activityName) {
  let total = 0;
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].activity === activityName)
      total += activities[i].duration;
  }

  console.log(`You have spent ${total} minutes in total on ${activityName}.`);

}
getActivityDuration("Facebook")
