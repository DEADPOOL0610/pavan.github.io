// 🔥 GitHub Auto Fetch
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
          <p>${repo.description || "No description available"}</p>
          <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
          <a href="${repo.html_url}" target="_blank" class="btn">View Repo</a>
        </div>
      `;
    });
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

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.size *= 0.96;

    ctx.fillStyle = "rgba(0,255,255,0.8)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    if (p.size < 0.5) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
