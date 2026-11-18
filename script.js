const DATA = {
  name: "JAY NAYAK",
  roles: ["Full Stack Developer", "AI/ML Enthusiast", "Problem Solver"],
  bio: [
    "I'm a third-year B.Tech CSE student specialising in AI & ML. I enjoy turning ideas into working products, from clean front-ends to models running right in the browser.",
    "I've built four projects so far and I'm currently working as a full stack web developer intern at Ricoz Innovation, while going deeper into DSA."
  ],
  facts: [["Degree","B.Tech CSE (AIML)"],["Year","3rd year"],["Focus","Web dev, ML, DSA"],["Now","Full Stack Intern"]],
  skills: {
    "Frontend": ["HTML","CSS","JavaScript","React"],
    "Backend": ["Node.js","Express"],
    "Databases": ["MongoDB","SQL"],
    "AI / ML": ["TensorFlow.js","Teachable Machine","Python"],
    "Languages": ["C++","JavaScript","Python"],
    "Tools": ["Git","GitHub","Vercel"],
    "Learning": ["Docker","Kubernetes"]
  },
  experience: [
    {role:"Full Stack Web Developer Intern", org:"Ricoz Innovation (FirstRicoz Pvt. Ltd.)", when:"Nov 2026 – Mar 2027", mode:"Internship · Remote",
     points:["Building and shipping features across the front end and back end of company projects as part of a remote team.","Working with the MERN stack: React on the front end, Node.js and Express APIs, MongoDB for data.","Taking part in regular performance reviews and acting on feedback to raise code quality and meet timelines."],
     tags:["React","Node.js","Express","MongoDB","SQL","Git"]}
  ],
  projects: [
    {title:"PlantSafe AI", type:"AI", desc:"Upload a leaf photo, pick a crop and get a disease prediction. Six Teachable Machine models run in the browser with TensorFlow.js, plus a disease library, symptom quiz and care checklist.", live:"https://plantsafe-ai.vercel.app/", code:"https://github.com/crazyboy118/Plantsafe-AI.git"},
    {title:"Lunova", type:"Web", desc:"A personalised photography website with a clean, image-first layout.", live:"https://lunova-photography.vercel.app/", code:"https://github.com/crazyboy118/lunova-photography.git"},
    {title:"Tunexa", type:"Web", desc:"A Spotify-inspired music player UI with playlists and playback controls.", live:"https://tunexa-psi.vercel.app/", code:"https://github.com/crazyboy118/Tunexa.git"},
    {title:"Simon Says", type:"Game", desc:"A classic memory game: repeat the growing colour sequence as long as you can.", live:"https://simon-says-mauve.vercel.app/", code:"https://github.com/crazyboy118/Simon-says.git"}
  ],
  contactText: "Open to internships and collaborations. My inbox is always open.",
  email: "jaynayak118@gmail.com",
  socials: [["GitHub","https://github.com/crazyboy118"],["LinkedIn","https://www.linkedin.com/in/jay-nayak-84507a325"]]
};


const $ = id => document.getElementById(id);
$("name").textContent = DATA.name; $("logo").textContent = DATA.name;
$("foot").textContent = DATA.name; document.title = DATA.name + " · Portfolio";
$("bio").innerHTML = DATA.bio.map(t => `<p>${t}</p>`).join("");
$("facts").innerHTML = DATA.facts.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join("");
$("skillGrid").innerHTML = Object.entries(DATA.skills).map(([k,v]) => `<div class="skill"><h3>${k}</h3><div class="tags">${v.map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>`).join("");
$("contactText").textContent = DATA.contactText; $("mail").href = "mailto:" + DATA.email; $("mailText").textContent = DATA.email;
$("socials").innerHTML = DATA.socials.map(([n,u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("");


$("expList").innerHTML = DATA.experience.map(j => `<article class="job"><div class="when">${j.when}<br>${j.mode}<br><span class="live">Current</span></div><div><h3>${j.role}</h3><div class="org">${j.org}</div><ul>${j.points.map(x=>`<li>${x}</li>`).join("")}</ul><div class="tags">${j.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></div></article>`).join("");

const types = ["All", ...new Set(DATA.projects.map(p => p.type))];
function renderProjects(f){
  $("projGrid").innerHTML = DATA.projects.filter(p => f === "All" || p.type === f).map((p,i) =>
    `<article class="card"><span class="num">0${i+1} · ${p.type}</span><h3>${p.title}</h3><p>${p.desc}</p><div class="row"><a href="${p.live}" target="_blank" rel="noopener">Live ↗</a><a href="${p.code}" target="_blank" rel="noopener">Code ↗</a></div></article>`).join("");
}
$("filters").innerHTML = types.map((t,i) => `<button class="${i?"":"on"}">${t}</button>`).join("");
$("filters").onclick = e => { if(e.target.tagName !== "BUTTON") return;
  [...$("filters").children].forEach(b => b.classList.remove("on")); e.target.classList.add("on"); renderProjects(e.target.textContent); };
renderProjects("All");


let ri = 0, ci = 0, del = false;
(function type(){
  const w = DATA.roles[ri];
  $("typed").textContent = w.slice(0, ci);
  if(!del && ci === w.length){ del = true; return setTimeout(type, 1400); }
  if(del && ci === 0){ del = false; ri = (ri + 1) % DATA.roles.length; }
  ci += del ? -1 : 1; setTimeout(type, del ? 40 : 80);
})();


const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.1});
document.querySelectorAll(".rv").forEach(el => io.observe(el));


const root = document.documentElement;
try { const s = localStorage.getItem("theme"); if(s) root.dataset.theme = s; } catch(e){}
$("theme").onclick = () => {
  const dark = getComputedStyle(root).getPropertyValue("--bg").trim() === "#0e1013";
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch(e){}
};
