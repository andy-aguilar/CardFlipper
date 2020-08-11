document.addEventListener("DOMContentLoaded", () => {
    const cardFront = document.querySelector(".flip-card-front")
    cardFront.addEventListener("click", (e) => {
        e.target.closest(".flip-card-inner").style.transform = "rotateY(180deg)";
    })

    const cardBack = document.querySelector(".flip-card-back")
    cardBack.addEventListener("click", (e) => {
        e.target.closest(".flip-card-inner").style.transform = "";
    })
})