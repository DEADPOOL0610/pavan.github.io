// 🔥 GitHub Projects
const username = "deadpool0610";
const container = document.getElementById("projects");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {

    container.innerHTML = "";

    data.slice(0, 6).forEach(repo => {

      container.innerHTML += `
        <div class="card">
          <h3>${repo.name}</h3>

          <p>
            ${repo.description || "No description available"}
          </p>

          <p>
            ⭐ ${repo.stargazers_count}
            &nbsp;&nbsp;
            🍴 ${repo.forks_count}
          </p>

          <a href="${repo.html_url}"
             target="_blank"
             class="btn">
             View Repo
          </a>
        </div>
      `;
    });

    // attach tilt after cards are created
    attachTilt();

  });


// 🌌 Particle Mouse Effect
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

window.addEventListener("mousemove", e => {

  for (let i = 0; i < 5; i++) {

    particles.push({
      x: e.x,
      y: e.y,
      size: Math.random() * 5,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2
    });

  }

});

function animateParticles() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {

    p.x += p.speedX;
    p.y += p.speedY;

    p.size *= 0.96;

    ctx.fillStyle = "rgba(0,255,255,0.8)";

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    if (p.size < 0.5) {
      particles.splice(i, 1);
    }

  });

  requestAnimationFrame(animateParticles);

}

animateParticles();

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});


// ✨ Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(sec => {

    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }

  });

});


// 💎 3D Tilt Effect
function attachTilt() {

  document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 10;
      const rotateY = (x - centerX) / 10;

      card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

  });

}
// 🤖 AI Typing Intro

const typingElement = document.getElementById("typing");

const text =
  "AI Engineer | GenAI | Building Intelligent Systems";

let index = 0;

function typeText() {

  if (index < text.length) {

    typingElement.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText, 60);

  }

}

typeText();
