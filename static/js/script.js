function openSubMenu()
{
    var submenu = document.getElementById("submenu");
    submenu.style.display = "block";
}

function closeSubMenu()
{
    var submenu = document.getElementById("submenu");
    submenu.style.display = "none";
}

function openSubMenu1()
{
    var submenu = document.getElementById("submenu1");
    submenu.style.display = "block";
}

function closeSubMenu1()
{
    var submenu = document.getElementById("submenu1");
    submenu.style.display = "none";
}


const slides = document.getElementById('slides');
let slideIndex = 0;

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.children.length;
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3000);
