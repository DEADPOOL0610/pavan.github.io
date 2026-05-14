// 🚀 GitHub Projects
const username = "deadpool0610";

const container =
  document.getElementById("projects");

fetch(
  `https://api.github.com/users/${username}/repos`
)

.then(res => res.json())

.then(data => {

  container.innerHTML = "";

  const excluded = [
    "portfolio",
    "resume"
  ];

  data
    .filter(repo =>
      !excluded.includes(
        repo.name.toLowerCase()
      )
    )

    .slice(0, 10)

    .forEach(repo => {

      container.innerHTML += `

        <div class="glass card">

          <h3>${repo.name}</h3>

          <p>
            ${repo.description || "Enterprise / AI project"}
          </p>

          <p>
            ⭐ ${repo.stargazers_count}
            &nbsp;&nbsp;
            🍴 ${repo.forks_count}
          </p>

          <a
            href="${repo.html_url}"
            target="_blank"
            class="btn">

            View Repo

          </a>

        </div>

      `;
    });

});


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


// 🚀 Carousel
const slider =
  document.getElementById("projects");

document
  .getElementById("rightBtn")

  .addEventListener(
    "click",
    () => {

      slider.scrollBy({
        left: 400,
        behavior: "smooth"
      });

    }
  );

document
  .getElementById("leftBtn")

  .addEventListener(
    "click",
    () => {

      slider.scrollBy({
        left: -400,
        behavior: "smooth"
      });

    }
  );
