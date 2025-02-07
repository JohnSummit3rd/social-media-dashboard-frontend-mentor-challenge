function turnOnLightMode() {
    const background = document.querySelector(".container");
    background.classList.toggle("white-container");

    const statsCards = document.querySelectorAll(".stats");
    statsCards.forEach(card => {
        if (card.classList.contains("instagram-card")) {
            card.classList.toggle("instagram-white");
        }

        card.classList.toggle("white-stats");
    });

    const analyticsCards = document.querySelectorAll(".analytics-card");
    analyticsCards.forEach(card => {
        card.classList.toggle("white-analytics-card");
    });

    const text = document.getElementById("fb-details");
    text.classList.toggle("color-green");
}