const dateSection = document.getElementById("date");
const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.getElementsByClassName("tabcontent");

const tablinksArr = Array.from(tablinks);

const today = new Date();
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const date = `${months[today.getMonth()]} ${today.getDate()}`;

dateSection.innerHTML = `Today's date is: ${date}`;

tablinksArr.forEach((tl) => tl.addEventListener("click", (e) => openMonth(e)));

function openMonth(e) {
  const month = e.currentTarget.innerHTML;
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(month).style.display = "block";
  e.currentTarget.className += " active";
}

const currentMonth = months[today.getMonth()];
document.getElementById(currentMonth).style.display = "block";
tablinksArr.forEach((tl) => {
  if (tl.innerHTML === currentMonth) {
    tl.className += " active";
  }
});
