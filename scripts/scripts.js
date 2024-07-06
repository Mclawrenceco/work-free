function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
  const monthDays = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthDays[month - 1];
}

function age() {
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
  
  alert(`Your Age is ${y} Years ${m} Months ${d} Days`);
}