// 🚀 GitHub Projects
const username = "deadpool0610";

const container =
  document.getElementById("projects");

let reposData = [];

fetch(
  `https://api.github.com/users/${username}/repos`
)

.then(res => res.json())

.then(data => {

  const excluded = [
    "portfolio",
    "resume"
  ];

  reposData = data
    .filter(repo =>
      !excluded.includes(
        repo.name.toLowerCase()
      )
    )
    .slice(0, 10);

  renderProjects();

});


// 🚀 Render Projects
function renderProjects() {

  container.innerHTML = "";

  reposData.forEach(repo => {

    container.innerHTML += `

      <div class="card">

        <div class="card-top">

          <h3>${repo.name}</h3>

          <p>
            ${repo.description || "Enterprise / AI project"}
          </p>

        </div>

        <div class="card-bottom">

          <div class="repo-stats">

            ⭐ ${repo.stargazers_count}
            &nbsp;&nbsp;&nbsp;
            🍴 ${repo.forks_count}

          </div>

          <a
            href="${repo.html_url}"
            target="_blank"
            class="btn">

            View Repo

          </a>

        </div>

      </div>

    `;
  });

}


// 🚀 Carousel
const slider =
  document.getElementById("projects");

let currentIndex = 0;

function moveCarousel() {

  const cards =
    document.querySelectorAll(".card");

  if (!cards.length) return;

  const cardWidth =
    cards[0].offsetWidth + 48;

  slider.scrollTo({

    left: currentIndex * cardWidth,

    behavior: "smooth"

  });

}


// RIGHT
document
  .getElementById("rightBtn")

  .addEventListener(
    "click",
    () => {

      currentIndex++;

      if (
        currentIndex >= reposData.length
      ) {

        currentIndex = 0;
      }

      moveCarousel();

    }
  );


// LEFT
document
  .getElementById("leftBtn")

  .addEventListener(
    "click",
    () => {

      currentIndex--;

      if (currentIndex < 0) {

        currentIndex =
          reposData.length - 1;
      }

      moveCarousel();

    }
  );


// 🚀 Reveal Sections
const sections =
  document.querySelectorAll(".section");

window.addEventListener(
  "scroll",
  () => {

    sections.forEach(sec => {

      const top =
        sec.getBoundingClientRect().top;

      if (
        top < window.innerHeight - 100
      ) {

        sec.classList.add("show");

      }

    });

  }
);


// 🚀 Typing Effect
const typingElement =
  document.getElementById("typing");

const text =
  "Dynamics 365 F&O Developer • AI Enthusiast • Enterprise Systems";

let index = 0;

function typeText() {

  if (index < text.length) {

    typingElement.innerHTML +=
      text.charAt(index);

    index++;

    setTimeout(typeText, 45);

  }

}

typeText();
