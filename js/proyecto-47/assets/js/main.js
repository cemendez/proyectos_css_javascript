window.addEventListener("load", () => {
    let btn = document.querySelector(".nav__btn");
    let pagesBox = document.querySelector(".layout__pages");
    let listNav = document.querySelector(".layout__list");
    let listItems = document.querySelectorAll(".list__item");
    let pageItems = document.querySelectorAll(".pages__page");

    btn.addEventListener("click", () => {
        btn.classList.toggle("nav__btn--active");
        pagesBox.classList.toggle("layout__pages--show");
        listNav.classList.toggle("layout__list--show");
    });

    let activatePage = (i) => {
        pageItems.forEach((page) => {
            page.classList.remove("pages__page--active");
        });
        pageItems[i].classList.add("pages__page--active");
    };

    listItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            activatePage(index);
        });
    });
});
