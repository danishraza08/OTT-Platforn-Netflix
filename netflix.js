document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".banner img");

    banners.forEach(banner => {
        banner.addEventListener("mouseover", () => {
            banner.style.opacity = 0.8;
        });
        banner.addEventListener("mouseout", () => {
            banner.style.opacity = 1;
        });
    });

    const rowPosters = document.querySelectorAll(".row-posters img");

    rowPosters.forEach(poster => {
        poster.addEventListener("click", () => {
            alert("Poster clicked!");
        });
    });
});
