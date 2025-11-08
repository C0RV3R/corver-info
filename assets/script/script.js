const pages = document.querySelectorAll(".page");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentPage = 0;

function updatePage() {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
  });

  const progressPercent = ((currentPage + 1) / pages.length) * 100;
  progress.style.width = progressPercent + "%";

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

// --- Page 3: Skill categories ---
const skillHeaders = document.querySelectorAll("#page3 .skill-header");

skillHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const targetId = header.dataset.target;
    const targetList = document.getElementById(targetId);

    // Eğer zaten açık ise kapat
    if(targetList.classList.contains("active")) {
      targetList.classList.remove("active");
    } else {
      // Diğer tüm listeleri kapat
      document.querySelectorAll("#page3 .skill-list").forEach(list => list.classList.remove("active"));
      targetList.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // LIGHTBOX
  const images = document.querySelectorAll('.project-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.dataset.full;
      lightboxImg.classList.remove('zoomed');
    });
  });

  // Resme tıklayınca zoom toggle
  lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxImg.classList.toggle('zoomed');
  });

  // Modal dışına tıklayınca kapatma
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.classList.remove('zoomed');
  });

  // ESC tuşu ile kapatma
  document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
      lightbox.style.display = 'none';
      lightboxImg.classList.remove('zoomed');
    }
  });
});




updatePage();
