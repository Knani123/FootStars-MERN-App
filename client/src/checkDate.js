function formatDate() {
  var d = new Date(),
    month = "" + d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    h = d.getHours(),
    minu = d.getMinutes();

  return [year, month, day, h, minu].join("-");
}
setInterval(() => console.log(formatDate()), 1000);
