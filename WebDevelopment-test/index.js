const accordion = document.querySelectorAll(".accordion-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    for (j = 0; j < accordion.length; j++) {
      if (this !== accordion[j]) {
        accordion[j].classList.remove("active");
      }
    }
  });
}

const experienceBtn = document.querySelector(".experience-btn");
const safeAndEffectiveBtn = document.querySelector(".safe-and-effective-btn");

experienceBtn.addEventListener("click", () => {
  location.href = "#first-scroll";
});

safeAndEffectiveBtn.addEventListener("click", () => {
  location.href = "#second-scroll";
});
