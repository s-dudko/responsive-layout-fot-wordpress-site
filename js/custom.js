"use strict";

let tableItems = document.querySelectorAll(".table-view-item-small");

for (let i = 0; i < tableItems.length; i++){
    let tableItemContent = tableItems[i].querySelector(".table-view-item-small-content");
    let arrow = tableItems[i].querySelector(".table-view-item-small__tear-up");
    let pluginImage = tableItems[i].querySelector(".category-block__list-item__img");

    arrow.addEventListener("click", () => {
        tableItemContent.classList.toggle("display-none");
        pluginImage.classList.toggle("display-none");
        arrow.classList.toggle("open");
    });
}