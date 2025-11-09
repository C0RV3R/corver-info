const pages = document.querySelectorAll(".page");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentPage = 0;

function updatePage() {
  pages.forEach((p, i) => p.classList.toggle("active", i === currentPage));
  progress.style.width = ((currentPage + 1) / pages.length * 100) + "%";
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

nextBtn.addEventListener("click", () => { if(currentPage < pages.length-1) currentPage++; updatePage(); });
prevBtn.addEventListener("click", () => { if(currentPage > 0) currentPage--; updatePage(); });
updatePage();

const projectBtns = document.querySelectorAll(".project-btn");
const projectContents = document.querySelectorAll(".project-content");
const projectsMain = document.getElementById("projects-main");

projectBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    projectsMain.style.display = "none";
    projectContents.forEach(pc => pc.style.display = "none");
    document.getElementById(target).style.display = "block";
  });
});

document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    projectContents.forEach(pc => pc.style.display = "none");
    projectsMain.style.display = "block";
  });
});

document.querySelectorAll(".show-images-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const images = btn.nextElementSibling;
    images.style.display = images.style.display === "none" ? "flex" : "none";
  });
});
