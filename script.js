// 🔥 GitHub Projects
const username = "deadpool0610";
const container = document.getElementById("projects");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      container.innerHTML += `
        <div class="card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank" class="btn">View</a>
        </div>
      `;
    });
  });

// 🌌 particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

window.addEventListener("mousemove", e => {
  particles.push({ x: e.x, y: e.y, size: 5 });
});

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.size *= 0.95;
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
    if(p.size<1) particles.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();

// 🤖 scroll robot
const parts = document.querySelectorAll(".part");

window.addEventListener("scroll", () => {
  let y = window.scrollY;

  if (y > 300) parts[0].classList.add("show");
  if (y > 600) parts[1].classList.add("show");
  if (y > 900) parts[2].classList.add("show");
  if (y > 1100) parts[3].classList.add("show");
});
