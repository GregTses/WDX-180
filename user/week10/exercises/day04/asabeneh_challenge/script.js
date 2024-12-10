const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon:
          '<span style="color: black;"><i class="fab fa-linkedin fa-2xl"></span>',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon:
          '<span style="color: black;"><i class="fab fa-twitter-square fa-2xl"></i></span>',
      },
      {
        social: "Github",
        fontawesomeIcon:
          '<span style="color: black;"><i class="fab fa-github-square fa-2xl"></i></span>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

console.log(asabenehChallenges2020);
// INSERT YOUR CODE HERE
("use strict");

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function updateDateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const currentDateTime = now.toLocaleString("en-US", options);
  document.querySelector("#datetime").textContent = currentDateTime;
  document.querySelector("#year").style.color = randomColor();
  document.querySelector("#datetime").style.backgroundColor = randomColor();
}

document.querySelector(".wrapper").style.textAlign = "center";
document.querySelector("html").style.fontFamily = "Sans-Serif";
let wrapper = document.querySelector(".wrapper");
wrapper.innerHTML =
  "<h1></h1><h2></h2><h3 id = 'datetime'></h3><ul></ul><h4></h4><div class='icons'></div><p id = 'bio'></p><div id='listscontainer'><div id='titles'><p></p><ul></ul></div><div id='skills'><p></p><ul></ul></div><div id='qualifications'><p></p><ul></ul></div></div><div id = 'keywords'><p></p></div>";

//   Create and style Title
document.querySelector(
  "h1"
).innerHTML = `${asabenehChallenges2020.challengeTitle} <span id='year'>${asabenehChallenges2020.challengeYear}</span>`;
document.querySelector("h1 span").style.fontSize = "80px";

//  Create and style Subtitle
document.querySelector("h2").innerText =
  asabenehChallenges2020.challengeSubtitle;
document.querySelector("h2").style.cssText =
  "text-align: center;font-weight: 100; text-decoration: underline; margin: 0";

//  Style Date and Time
document.querySelector("#datetime").style.cssText =
  "display: inline-block; padding: 10px 20px;margin-bottom: 15px";

//  Create and style List
let list;
let details = "";
let uList = document.querySelector("ul");
asabenehChallenges2020.challenges.forEach((challenge) => {
  list = document.createElement("li");
  challenge.topics.forEach((topic) => {
    details += `<p class='details'>${topic}</p>`;
  });
  list.innerHTML = `<span class = 'name'>${challenge.name}</span><details><summary>${challenge.topics[0]}</summary>${details}</details><span class = 'status'>${challenge.status}</span>`;
  uList.appendChild(list);
  details = "";
});
document.querySelector("ul").style.cssText =
  "list-style: none;max-width: 800px; margin:0 auto";
document
  .querySelectorAll("li")
  .forEach(
    (list) =>
      (list.style.cssText =
        "display: flex;justify-content: space-between;background: #eb695b; padding: 20px;border: 1px solid white")
  );
document.querySelectorAll("span.name").forEach((span) => {
  span.style.cssText = "width:215px;text-align: left";
});
document.querySelectorAll("span.status").forEach((span) => {
  span.style.cssText = "width:150px;text-align: right";
});
document.querySelectorAll("details").forEach((detail) => {
  detail.style.cssText = "text-align: left;width:130px";
});
document.querySelectorAll("p").forEach((p) => {
  p.style.lineHeight = "0.3rem";
});
document.querySelector("li").style.background = "#5bbc7a";
document.querySelector("ul li:nth-child(2)").style.background = "#f7dc5c";

// Create Author info (name social and bio )
let authorName = document.querySelector("h4");
authorName.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
authorName.style.cssText = "font-size: 2rem;margin: 20px 0px";

let iconHolder = document.querySelector(".icons");
asabenehChallenges2020.author.socialLinks.forEach((link) => {
  iconHolder.innerHTML += `<a href=${link.url}>${link.fontawesomeIcon}</a>`;
});

let bio = document.querySelector("#bio");
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.cssText =
  "line-height:1rem;max-width: 650px;display: inline-block; padding: 40px 0px";

// Create and style Titles List
document.querySelector("#listscontainer").style.textAlign = "left";
let p = document.querySelector("#titles p");
p.textContent = "Titles";
p.style.cssText = "font-weight: bold;font-size: 1.3rem;margin: 0";

let ul = document.querySelector("#titles ul");
asabenehChallenges2020.author.titles.forEach((item) => {
  ul.innerHTML += `<li>${item[0]}${item[1]}</li>`;
});
ul.style.listStyle = "none";
ul.textAlign = "left";
ul.style.paddingLeft = "0";
ul.style.margin = "0.4rem 0";
ul.style.lineHeight = "1.6rem";

// Create and style Skills List

let p2 = document.querySelector("#skills p");
p2.textContent = "Skills";
p2.style.cssText = "font-weight: bold;font-size: 1.3rem;margin: 0";

let ul2 = document.querySelector("#skills ul");
asabenehChallenges2020.author.skills.forEach((item) => {
  ul2.innerHTML += `<li>✅ ${item}</li>`;
});
ul2.style.listStyle = "none";
ul2.textAlign = "left";
ul2.style.paddingLeft = "0";
ul2.style.margin = "0.4rem 0";
ul2.style.lineHeight = "1.6rem";

// Create and style Qualifications List
let p3 = document.querySelector("#qualifications p");
p3.textContent = "Qualifications";
p3.style.cssText = "font-weight: bold;font-size: 1.3rem;margin: 0";

let ul3 = document.querySelector("#qualifications ul");
asabenehChallenges2020.author.qualifications.forEach((item) => {
  ul3.innerHTML += `<li>👨‍🎓 ${item}</li>`;
});
document.querySelector(
  "#qualifications ul li"
).innerHTML = `📖 MSc. Computer Science Ongoing`;
ul3.style.listStyle = "none";
ul3.textAlign = "left";
ul3.style.paddingLeft = "0";
ul3.style.margin = "0.4rem 0";
ul3.style.lineHeight = "1.6rem";

let listscontainer = document.querySelector("#listscontainer");
listscontainer.style.display = "flex";
listscontainer.style.justifyContent = "space-between";
listscontainer.style.maxWidth = "750px";
listscontainer.style.margin = "0 auto";

// Create and style Keywords div
let pEl = document.querySelector("#keywords p");
pEl.textContent = "Keywords";
pEl.style.cssText = "text-align: left;font-weight: bold;font-size: 1.3rem";

let keywordsDiv = document.querySelector("#keywords");
keywordsDiv.style.maxWidth = "700px";
keywordsDiv.style.margin = "0 auto";
asabenehChallenges2020.keywords.forEach((word) => {
  keywordsDiv.innerHTML += `<span class='span'>#${word}</span>`;
});
let spans = document.querySelectorAll(".span");
console.log(spans);
spans.forEach((span) => {
  span.style.cssText = `background: ${randomColor()};display: inline-block;padding: 5px 10px;margin: 4px 5px; border-radius: 15px;font-size: 0.8rem;font-style: italic;font-weight: bold`;
});
setInterval(updateDateTime, 1000);
