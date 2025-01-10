
// Counter Javascrit  ===============================// 
var counters = document.querySelectorAll(".counter");

function counter(element, endpoint, time) {
    let upto = 0;
    let count = setInterval(update, time);

    function update() {
        element.innerHTML = ++upto;
        if (upto === endpoint) {
            clearInterval(count);
        }
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let target = parseInt(entry.target.getAttribute('data-target'));
            let time = parseInt(entry.target.getAttribute('data-time')) || 10;  // Default to 10ms if not set
            counter(entry.target, target, time);
            observer.unobserve(entry.target);  // Stop observing after counting
        }
    });
}, { threshold: 0.5 });  // 50% visibility to trigger

// Select and observe all counter elements
counters.forEach((counter) => {
    observer.observe(counter);
});

// Counter Javascript End Here =========================//

// NavBar Javascript ============================= //

// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector(".navbar")
//     if (window.scrollY > 100) {
//         navbar.classList.add("sticky")
//     }else{
//         navbar.classList.remove("sticky")
//     }
// })








