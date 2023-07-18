document.addEventListener("DOMContentLoaded", function () {
  const monthEn = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const tableDays = document.getElementById("days");

  function getDaysCalendary(month, year) {
    document.getElementById("month").innerHTML = monthEn[month];
    document.getElementById("years").innerHTML = year;

    let firstDayOfWeek = new Date(year, month, 1).getDay() - 1;
    let getLastDayThisMonth = new Date(year, month + 1, 0).getDate();

    for (
      var i = -firstDayOfWeek, index = 0;
      i < 42 - firstDayOfWeek;
      i++, index++
    ) {
      let date = new Date(year, month, i);
      let dateNow = new Date();
      let dayTable = tableDays.getElementsByTagName("td")[index];
      dayTable.classList.remove("monthPrev");
      dayTable.classList.remove("monthNext");
      dayTable.classList.remove("dayCurrent");
      dayTable.innerHTML = date.getDate();

      if (
        date.getFullYear() == dateNow.getFullYear() &&
        date.getMonth() == dateNow.getMonth() &&
        date.getDate() == dateNow.getDate()
      ) {
        dayTable.classList.add("dayCurrent");
      }

      if (i < 1) {
        dayTable.classList.add("monthPrev");
      }
      if (i > getLastDayThisMonth) {
        dayTable.classList.add("monthNext");
      }
    }
  }

  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();
  getDaysCalendary(month, year);

  const btnNext = document.getElementById("btnNext");
  const btnprev = document.getElementById("btnPrev");

  btnNext.onclick = function () {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    getDaysCalendary(month, year);
  };
  btnprev.onclick = function () {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    getDaysCalendary(month, year);
  };
});
