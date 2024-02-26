const quotes = {
  coding: [
    "Coding like poetry should be short and concise",
    "It’s not a bug; it’s an undocumented feature.",
    "Make it work, make it right, make it fast.",
    "Clean code always looks like it was written by someone who cares",
    "There is always one more bug to fix",
    "Computers are fast; developers keep them slow.",
  ],
  inspirational: [
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "Success usually comes to those who are too busy to be looking for it.",
    "When you change your thoughts, remember to also change your world.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  ],
  fitness: [
    "We are what we repeatedly do. Excellence then is not an act but a habit.",
    "The body achieves what the mind believes.",
    "The hard days are the best because that’s when champions are made, so if you push through, you can push through anything.",
    "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.",
    "Push harder than yesterday if you want a different tomorrow.",
    "The real workout starts when you want to stop.",
    "Once you are exercising regularly, the hardest thing is to stop it.",
  ],
};

let currentCategory = "coding";
let currentIndex = 0;
let darkMode = false;
function updateQuote() {
  const quoteText = document.getElementById("quoteText");
  quoteText.textContent = quotes[currentCategory][currentIndex];
}

function getNextQuote() {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  updateQuote();
}

function getPreviousQuote() {
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  updateQuote();
}

function getRandomQuote() {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  updateQuote();
}

function changeCategory() {
  const categorySelector = document.getElementById("categorySelector");
  currentCategory = categorySelector.value;
  currentIndex = 0;
  updateQuote();
}

function changeFontSize() {
  const fontSize = document.getElementById("fontSize").value;
  document.getElementById("quoteText").style.fontSize = fontSize + "px";
}

//dark mode
const body = document.querySelector("body");
const btn = document.querySelector(".darkmode-toggle");
const icon = document.querySelector(".darkmode-icon");

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value) {
  localStorage.setItem("darkmode", value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load() {
  const darkmode = localStorage.getItem("darkmode");

  //if the dark mode was never activated
  if (!darkmode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (darkmode == "true") {
    //if the dark mode is activated
    body.classList.add("darkmode");
    icon.classList.add("fa-moon");
  } else if (darkmode == "false") {
    //if the dark mode exists but is disabled
    icon.classList.add("fa-sun");
  }
}

load();

btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  icon.classList.add("animated");

  //save true or false
  store(body.classList.contains("darkmode"));

  if (body.classList.contains("darkmode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});

// Initial setup
updateQuote();
