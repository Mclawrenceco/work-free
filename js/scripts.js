function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
  const monthDays = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthDays[month - 1];
}

function calculateAge() {
  const d1 = parseInt(document.getElementById("date").value);
  const m1 = parseInt(document.getElementById("month").value);
  const y1 = parseInt(document.getElementById("year").value);

  if (isNaN(d1) || isNaN(m1) || isNaN(y1) || d1 <= 0 || m1 <= 0 || m1 > 12 || y1 < 0) {
    alert("Invalid Date");
    return;
  }

  const date = new Date();
  let d2 = date.getDate();
  let m2 = date.getMonth() + 1;
  let y2 = date.getFullYear();

  if (d1 > d2) {
    m2 -= 1;
    d2 += getDaysInMonth(m2, y2);
  }

  if (m1 > m2) {
    y2 -= 1;
    m2 += 12;
  }

  const d = d2 - d1;
  const m = m2 - m1;
  const y = y2 - y1;

  const ageString = `Your Age is ${y} Year${y !== 1 ? 's' : ''}, ${m} Month${m !== 1 ? 's' : ''}, and ${d} Day${d !== 1 ? 's' : ''}`;
  document.getElementById("age").innerText = ageString;
}

function calculateBirthday() {
  const bd1 = parseInt(document.getElementById("bday-date").value);
  const bm1 = parseInt(document.getElementById("bday-month").value);

  if (isNaN(bd1) || isNaN(bm1) || bd1 <= 0 || bm1 <= 0 || bm1 > 12) {
    alert("Invalid Date");
    return;
  }

  const date = new Date();
  const currentYear = date.getFullYear();
  let nextBirthday = new Date(currentYear, bm1 - 1, bd1);

  if (date > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, bm1 - 1, bd1);
  }

  const timeDiff = nextBirthday.getTime() - date.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const monthsLeft = nextBirthday.getMonth() - date.getMonth() + (12 * (nextBirthday.getFullYear() - date.getFullYear()));

  const birthdayString = `Your next birthday is in ${monthsLeft} Month${monthsLeft !== 1 ? 's' : ''} and ${daysLeft % 30} Day${daysLeft % 30 !== 1 ? 's' : ''}`;
  document.getElementById("birthday").innerText = birthdayString;
}
