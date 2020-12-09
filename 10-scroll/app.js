// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
document.getElementById("date").innerHTML = new Date().getFullYear();
// ********** close links ************
const navTogggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

const containerHeight = linksContainer.getBoundingClientRect().height;
navTogggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    }
    else {
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLinks = document.querySelector(".top-link");
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
        topLinks.classList.add("show-link")
    } else {
        navbar.classList.remove("fixed-nav");
        topLinks.classList.remove("show-link")

    }
});
// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        // remove default 
        e.preventDefault();

        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculte the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
      
       
        if (navHeight > 102) {
            position += containerHeight;
        }

        if (!fixedNav) {
            position = position - navHeight;
        }
        window.scrollTo({
            left: 0, top: position
        });
        linksContainer.style.height = 0;
    });
});

