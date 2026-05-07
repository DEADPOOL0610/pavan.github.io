body {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  background: black;
  color: white;
  overflow-x: hidden;
}

/* 🌌 animated background */
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 20%, #0ea5e9, transparent),
              radial-gradient(circle at 80% 80%, #9333ea, transparent),
              black;
  animation: moveBg 10s infinite alternate;
  z-index: -3;
}

@keyframes moveBg {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(60deg); }
}

/* HUD grid */
.hud {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: -2;
}

/* scan line */
body::after {
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0,255,255,0.08), transparent);
  animation: scan 4s linear infinite;
  pointer-events: none;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* hero */
.hero {
  text-align: center;
  padding: 120px 20px;
}

.hero h1 {
  font-size: 60px;
  background: linear-gradient(90deg, cyan, violet);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px cyan;
}

/* sections */
.section {
  padding: 80px 10%;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.section.show {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  color: cyan;
  margin-bottom: 40px;
}

/* projects */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

/* cards */
.card {
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  background: rgba(255,255,255,0.05);
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px cyan;
}

/* button */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(90deg, cyan, violet);
  color: black;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
}

/* particles */
#particles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -4;
}

footer {
  text-align: center;
  padding: 40px;
  color: #666;
}
