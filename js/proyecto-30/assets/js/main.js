window.addEventListener("DOMContentLoaded", () => {
  let btnPrev = document.querySelector(".btns__prev");
  let btnNext = document.querySelector(".btns__next");
  let progressBar = document.querySelector(".steps__bar");
  let stepsCircle = document.querySelectorAll(".steps__step");

  let progress = 0;
  let counter = 1;

  btnNext.addEventListener("click", () => {
    counter++;
    progress += 25;

    if (counter > stepsCircle.length) {
      counter = stepsCircle.length;
      progress = 100;
    }

    progressBar.style.height = progress + "%";

    disableBtns(progress);
    borderActive();
  });

  btnPrev.addEventListener("click", () => {
    counter--;
    progress -= 25;

    if (counter < 1) {
      counter = 1;
      progress = 0;
    }

    progressBar.style.height = progress + "%";

    disableBtns(progress);

    borderActive();
  });

  let disableBtns = (progress) => {
    if (progress >= 100) {
      btnNext.setAttribute("disabled", true);
      btnNext.classList.add("disable");
    } else {
      btnNext.removeAttribute("disabled");
      btnNext.classList.remove("disable");
    }

    if (progress <= 0) {
      btnPrev.setAttribute("disabled", "true");
      btnPrev.classList.add("disable");
    } else {
      btnPrev.removeAttribute("disabled");
      btnPrev.classList.remove("disable");
    }
  };

  let borderActive = () => {
    stepsCircle.forEach((step, i) => {
      if (counter > i) {
        step.classList.add("active");
        step.lastElementChild.style.opacity = 1;
      } else {
        step.classList.remove("active");
        step.lastElementChild.style.opacity = 0;
      }
    });
  };
});
