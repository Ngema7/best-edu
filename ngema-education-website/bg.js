
window.addEventListener("load", function () {
  const popup = document.getElementById("popupAd");
  popup.style.display = "flex";
});

/* CLOSE POPUP */
function closePopup() {
  document.getElementById("popupAd").style.display = "none";
}


























const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
    sidebar.classList.add("show");
    hamburgerIcon.className = "fa-solid fa-xmark";
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburgerIcon.className = "fa-solid fa-bars";
});

document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("show");
        hamburgerIcon.className = "fa-solid fa-bars";
    });
});



// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // scroll distance before change
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




/*our expertssss*/
const slider = document.getElementById('slider');
const boxes = slider.querySelectorAll('.box');
const dotsContainer = document.getElementById('dots');

function getBoxesPerView() {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

let boxesPerView = getBoxesPerView();
let totalBoxes = boxes.length;
let totalSlides = Math.ceil(totalBoxes / boxesPerView);
let currentIndex = 0;

// Create dots
function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    }
}
createDots();
let dots = dotsContainer.querySelectorAll('.dot');

function updateSlider() {
    const slideWidth = boxes[0].offsetWidth + 20; // box width + gap
    const offset = slideWidth * boxesPerView * currentIndex;
    slider.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
}

// Auto slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

let interval = setInterval(nextSlide, 5000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

// Handle resize
window.addEventListener('resize', () => {
    boxesPerView = getBoxesPerView();
    totalSlides = Math.ceil(totalBoxes / boxesPerView);
    createDots();
    dots = dotsContainer.querySelectorAll('.dot');
    updateSlider();
});









/* footer dynamic year */
// Get the current year
const currentYear = new Date().getFullYear();
// Set it inside the span with id="year"
document.getElementById('year').textContent = currentYear;







//expertsssss
const slider2 = document.getElementById('slider2');
const boxes2 = slider2.querySelectorAll('.box2');
const dotsContainer2 = document.getElementById('dots2');

function getBoxesPerView2() {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

let boxesPerView2 = getBoxesPerView2();
let totalBoxes2 = boxes2.length;
let totalSlides2 = Math.ceil(totalBoxes2 / boxesPerView2);
let currentIndex2 = 0;
let dots2 = [];

// Create dots dynamically
function createDots2() {
    dotsContainer2.innerHTML = '';
    for (let i = 0; i < totalSlides2; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot2');
        if (i === currentIndex2) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex2 = i;
            updateSlider2();
            resetInterval2();
        });
        dotsContainer2.appendChild(dot);
    }
    dots2 = dotsContainer2.querySelectorAll('.dot2');
}
createDots2();

// Update slider position
function updateSlider2() {
    const slideWidth = boxes2[0].offsetWidth + 20; // box width + gap
    const offset = slideWidth * boxesPerView2 * currentIndex2;
    slider2.scrollTo({
        left: offset,
        behavior: 'smooth'
    });

    dots2.forEach(dot => dot.classList.remove('active'));
    if (dots2[currentIndex2]) dots2[currentIndex2].classList.add('active');
}

// Auto slide every 5s
function nextSlide2() {
    currentIndex2++;
    if (currentIndex2 >= totalSlides2) currentIndex2 = 0;
    updateSlider2();
}
let interval2 = setInterval(nextSlide2, 5000);

// Reset auto-slide interval on user action
function resetInterval2() {
    clearInterval(interval2);
    interval2 = setInterval(nextSlide2, 5000);
}

// Handle window resize
window.addEventListener('resize', () => {
    boxesPerView2 = getBoxesPerView2();
    totalSlides2 = Math.ceil(totalBoxes2 / boxesPerView2);
    if (currentIndex2 >= totalSlides2) currentIndex2 = totalSlides2 - 1;
    createDots2();
    updateSlider2();
});








// galery
const images = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});







// function mailSend(){
//     let parms = {
//       name : document.getElementById("name").value,
//       email : document.getElementById("email").value,
//       massage : document.getElementById("massage").value,

       
//     }
//     emailjs.send("service_8iaoo34","template_ofndufj",parms).then(alert("Email send !!"))
// }
function mailSend() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        massage: document.getElementById("massage").value,
    };

    emailjs
        .send("service_8iaoo34", "template_ofndufj", params)
        .then(function () {
            alert("Email sent successfully!");
        })
        .catch(function (error) {
            console.log("FAILED...", error);
            alert("Email not sent X");
        });
}
