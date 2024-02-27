const quotes = {
  coding: [
    {
      text: "Coding like poetry should be short and concise.",
      author: " Santosh Kalwar",
    },
    {
      text: "It’s not a bug; it’s an undocumented feature.",
      author: "Anonymous",
    },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    {
      text: "Clean code always looks like it was written by someone who cares.",
      author: "Robert C. Martin",
    },
    {
      text: "There is always one more bug to fix.",
      author: "Ellen Ullman",
    },
    {
      text: "Computers are fast; developers keep them slow.",
      author: "Anonymous",
    },
  ],
  inspirational: [
    {
      text: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
      author: "Albert Einstein",
    },
    {
      text: "Learn as if you will live forever, live like you will die tomorrow.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      text: "When you change your thoughts, remember to also change your world.",
      author: "Norman Vincent Peale",
    },
    {
      text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "I never dreamed about success. I worked for it.",
      author: "Estée Lauder",
    },
    {
      text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
      author: "Winston Churchill",
    },
    {
      text: "Setting goals is the first step in turning the invisible into the visible.",
      author: "Tony Robbins",
    },
  ],
  fitness: [
    {
      text: "We are what we repeatedly do. Excellence then is not an act but a habit.",
      author: "Aristotele",
    },
    {
      text: "The body achieves what the mind believes.",
      author: "Napoleon Hill",
    },
    {
      text: "Push harder than yesterday if you want a different tomorrow.",
      author: "Vincent Williams Sr.",
    },
    {
      text: "The real workout starts when you want to stop.",
      author: " Ronnie Coleman",
    },
    {
      text: "Once you are exercising regularly, the hardest thing is to stop it.",
      author: " Erin Gray",
    },
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      text: "All progress takes place outside the comfort zone.",
      author: "Michael John Bobak",
    },
    {
      text: "It’s hard to beat a person who never gives up.",
      author: " Babe Ruth",
    },
  ],
};

let currentCategory = "coding";
let currentIndex = 0;

function updateQuote() {
  const quoteText = document.getElementById("quoteText");
  const authorText = document.getElementById("authorText");
  quoteText.textContent = quotes[currentCategory][currentIndex].text;
  authorText.textContent = `- ${quotes[currentCategory][currentIndex].author}`;
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
  document.getElementById("authorText").style.fontSize =
    `${fontSize - 10}` + "px";
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
