let btnmenu = document.querySelector(".btn-menu");
const $MENU = document.querySelector("#menu");
const $UL = document.querySelectorAll(".list li a");

btnmenu.addEventListener("click", () => {
    $MENU.classList.toggle("aux");
});

$UL.forEach((a) => {
    a.addEventListener("click", () => {
        $MENU.classList.toggle("aux");
    });
});
