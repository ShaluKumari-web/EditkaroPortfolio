

const videos = document.querySelectorAll(".video-card video");

videos.forEach(video => {
    video.addEventListener("click", () => {

        // Request fullscreen (cross-browser)
        if (video.requestFullscreen) {
            video.requestFullscreen();
            video.play();
        }
    });
});
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        videos.forEach(video => video.pause());
    }
});

const buttons = document.querySelectorAll(".buttons button");
const videoCards = document.querySelectorAll(".video-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        videoCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");

            if (category === "all" || category === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});