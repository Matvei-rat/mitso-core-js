function parseDataFromRfc2822(value) {
  return new Date(value);
}

function parseDataFromIso8601(value) {
  return new Date(value);
}

function isLeapYear(date) {
  const year = date.getFullYear();
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  if (year % 400 !== 0) return false;
  return true;
}

function timeSpanToString(startDate, endDate) {
  const diff = endDate - startDate;
  const hours = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(diff % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function angleBetweenClockHands(date) {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();
  const hourAngle = (hours * 60 + minutes) * 0.5;
  const minuteAngle = minutes * 6;
  let angle = Math.abs(hourAngle - minuteAngle);
  if (angle > 180) angle = 360 - angle;
  return (angle * Math.PI) / 180;
}

function getDay(day, isLeap) {
  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: isLeap ? 29 : 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ];

  let remaining = day;
  for (let i = 0; i < months.length; i += 1) {
    if (remaining <= months[i].days) {
      return `${months[i].name}, ${remaining}`;
    }
    remaining -= months[i].days;
  }
  return 'Invalid day';
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
  getDay,
};
