let header = document.getElementsByTagName("header")[0];

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#223134DD";
  } else {
    header.style.backgroundColor = "#22313400";
  }
});

let menuIcon = document.getElementsByClassName("menu-icon")[0];
let headerRight = document.getElementsByClassName("header-right")[0];
let status = false;
menuIcon.addEventListener("click", () => {
  if (status === false) {
    status = true;
    headerRight.style.display = "block";
    header.style.backgroundColor = "#223134DD";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.toggle("fa-bars", false);
    menuIcon.classList.toggle("fa-close", true);
  } else {
    status = false;
    headerRight.style.display = "none";
    menuIcon.classList.toggle("fa-close", false);
    menuIcon.classList.toggle("fa-bars", true);
  }
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

let i = 1;
let tools = document.getElementsByClassName("tools")[0];
setInterval(function () {
  tools.childNodes[i].style.filter = "grayscale(0%)";
  tools.childNodes[i].style.transform = "scale(1.1)";
  i += 2;
  if (i == 11) {
    i = 1;
  }
  let x = 1;
  if (i != 1) {
    x = i - 2;
  } else {
    x = 9;
  }
  setTimeout(function () {
    tools.childNodes[x].style.filter = "grayscale(100%)";
    tools.childNodes[x].style.transform = "scale(1)";
  }, 1000);
}, 1500);
