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

const images = document.querySelectorAll('[data-src]');
const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
};
let loaded = 0;

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(`Image ${entry.target.src} is in the viewport!`);
      preloadImage(entry.target);
      // Stop watching and load the image
      self.unobserve(entry.target);
    }
  });
}, config);

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) { return; }
  img.src = src;
  _updateMonitoring();
}

// Just for the monitoring purpose. Isn't needed in real projects
function _updateMonitoring() {
  const container = document.getElementById('isIntersecting');
  const placeholder = container.querySelector('.placeholder')
  loaded += 1;
  placeholder.innerHTML = loaded;
  container.style.opacity = 1;
}
