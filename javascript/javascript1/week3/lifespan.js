const seriesDurations = [{
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

const totalHours = 365.25 * 80 * 24

function logOutSeriesText(seriesDurations) {
  let totalTimeSpend = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let getHours = (seriesDurations[i].days * 24) + seriesDurations[i].hours + (seriesDurations[i].minutes / 60);
    let timeSpend = getHours * 100 / totalHours;
    console.log(`${seriesDurations[i].title} took ${timeSpend.toFixed(3)}% of my life`);
    totalTimeSpend = totalTimeSpend + timeSpend;
  }
  console.log(`In total that is ${totalTimeSpend.toFixed(3)}% of my life `)
}
logOutSeriesText(seriesDurations);

const totalTimeInLife = 365 * 24 * 80
let totalTimeSeries = 0;

function calDuration(seriesDurations) {

  for (let i = 0; i < seriesDurations.length; i++) {
    const hours = (seriesDurations[i].days * 24) + seriesDurations[i].hours + (seriesDurations[i].minutes / 60);
    const timeSpend = hours * 100 / totalTimeInLife;
    console.log(`${seriesDurations[i].title} took ${timeSpend.toFixed(3)}% of my life`);
    totalTimeSeries += timeSpend;
  }
}
console.log(`In total of 80 years lifespan, the amount of time spent is ${totalTimeSeries}% `)
calDuration(seriesDurations);

