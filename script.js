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

    .slice(0, 6)

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

  attachTilt();

});


// subtle tilt
function attachTilt() {

  document
    .querySelectorAll(".card")

    .forEach(card => {

      card.addEventListener(
        "mousemove",
        e => {

          const rect =
            card.getBoundingClientRect();

          const x =
            e.clientX - rect.left;

          const y =
            e.clientY - rect.top;

          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;

          const rotateX =
            -(y - centerY) / 30;

          const rotateY =
            (x - centerX) / 30;

          card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;
        }
      );

      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform =
            `
            perspective(1000px)
            rotateX(0)
            rotateY(0)
            translateY(0)
            `;
        }
      );

    });

}


// reveal sections
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


// typing intro
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
