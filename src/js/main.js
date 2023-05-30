const closeModalBtns = document.querySelectorAll('.close-modal')
Fancybox.defaults.closeButton = false;

document.querySelector("#callorderModal").addEventListener("click", () => {
    Fancybox.show(
        [
        {
            src: "#callorder",
            type: "inline" 
        }
        ]
    );
}); 

closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        Fancybox.close();
    }); 
});

document.querySelector("#testId").addEventListener("click", (e) => {
    e.preventDefault();
    Fancybox.show(
        [
        {
            src: "#callorderResult",
            type: "inline" 
        }
        ]
    );
}); 
