// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// =========================
// DATA
// =========================
const courses = [
  {
    courseName: "民法債編總論（一）",
    semester: "114-2",
    category: "法律學系法學組",
    teacher: "王怡蘋",
    link: "",
    skills: ["Civil Law Basics", "Legal reasoning", "Obligation analysis"],
    description: "Learned the foundational structure of obligation law and how legal relationships are formed and interpreted."
  },
  {
    courseName: "大一國文：經典閱讀與詮釋（二）",
    semester: "114-2",
    category: "語文通識",
    teacher: "郭慧娟",
    link: "",
    skills: ["Text interpretation", "Critical reading", "Argument structuring"],
    description: "Developed the ability to analyze classical texts and construct structured interpretations."
  },
  {
    courseName: "刑法總則",
    semester: "114-2",
    category: "法律學系法學組",
    teacher: "馮聖晏",
    link: "",
    skills: ["Criminal law principles", "Case reasoning", "Legal analysis"],
    description: "Studied the core principles of criminal law and learned how to evaluate legal responsibility."
  },
  {
    courseName: "經濟學",
    semester: "114-2",
    category: "法律學系財經法組",
    teacher: "郭文忠",
    link: "",
    skills: ["Economic thinking", "Supply and demand", "Market behavior analysis"],
    description: "Learned how economic systems and incentives influence decision-making and markets."
  },
  {
    courseName: "國際公法",
    semester: "114-2",
    category: "法律學系法學組",
    teacher: "何婉君",
    link: "",
    skills: ["International law structure", "State relations", "Legal interpretation"],
    description: "Explored the legal framework governing relationships between states and international organizations."
  },
  {
    courseName: "憲法",
    semester: "114-2",
    category: "法律學系法學組",
    teacher: "林超駿",
    link: "",
    skills: ["Constitutional structure", "Fundamental rights", "Judicial review concepts"],
    description: "Learned the structure of constitutional law and the protection of fundamental rights."
  },
  {
    courseName: "斯拉夫語言文化概論",
    semester: "114-2",
    category: "通識教育中心",
    teacher: "塔瑪娜",
    link: "",
    skills: ["Cultural analysis", "Language awareness", "Regional studies"],
    description: "Explored the cultural and linguistic background of Slavic regions."
  },
  {
    courseName: "Python生成式AI實作",
    semester: "114-2",
    category: "通識教育中心",
    teacher: "楊喨智",
    link: "",
    skills: ["Python", "Generative AI basics", "Prompt design"],
    description: "Practiced building generative AI applications using Python and learned basic AI workflows."
  },
  {
    courseName: "體育：桌球",
    semester: "114-2",
    category: "體育",
    teacher: "李靜雯",
    link: "",
    skills: ["Table tennis skills", "Coordination", "Reaction training"],
    description: "Improved coordination and learned fundamental table tennis techniques."
  }
];

const projects = [
  {
    projectName: "Portfolio Website",
    oneLine: "A personal portfolio website with dark tech aesthetic.",
    description: "A single-page portfolio built using HTML, CSS, and JavaScript. Focused on clean UI, responsive design, and smooth navigation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourname.github.io/portfolio",
    status: "Completed"
  },
  {
    projectName: "ASCII Art Generator",
    oneLine: "Convert images into ASCII art in the browser.",
    description: "A JavaScript tool that transforms input images into ASCII representation using brightness mapping.",
    techStack: ["JavaScript", "Canvas API", "HTML"],
    github: "https://github.com/yourname/ascii-art",
    demo: "https://yourname.github.io/ascii-art",
    status: "Completed"
  },
  {
    projectName: "Floor Filter Tool",
    oneLine: "A program that filters building floors based on rules.",
    description: "A Python/JS hybrid logic tool that allows filtering floors (e.g. skipping specific numbers like 4).",
    techStack: ["Python", "JavaScript"],
    github: "https://github.com/yourname/floor-filter",
    demo: "",
    status: "In Progress"
  }
];
const skills = {
  Programming: ["Python", "JavaScript"],
  "AI / ML": ["Generative AI basics"],
  Web: ["HTML", "CSS"],
  Tools: [],
  Personal: [
    "Fast typing",
    "Empathy",
    "Attention to detail"
  ]
};
// =========================
// RENDER FUNCTIONS
// =========================

function renderCourses() {
  const container = document.getElementById("courses-container");

  container.innerHTML = courses.map(c => `
    <div class="card">
      <div class="course-title">${c.courseName}</div>
      <div class="course-meta">${c.category} ｜ ${c.semester}</div>
      <div class="course-skills">${c.skills.join(", ")}</div>
      <div>${c.description}</div>
    </div>
  `).join("");
}


function renderProjects() {
  const container = document.getElementById("projects-container");

  container.innerHTML = projects.map(p => `
    <div class="card">
      <div class="project-title">${p.projectName}</div>
      <div class="project-oneline">${p.oneLine}</div>
      <div>${p.description}</div>
      <div class="project-stack">${p.techStack.join(" · ")}</div>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ""}
      </div>
      <div>Status: ${p.status}</div>
    </div>
  `).join("");
}


function renderSkills() {
  const container = document.getElementById("skills-container");

  let html = "";

  for (let group in skills) {
    html += `
      <div class="skill-group">
        <div class="skill-group-title">${group}</div>
        <div>
          ${skills[group].map(s => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}


// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  renderProjects();
  renderSkills();
});
