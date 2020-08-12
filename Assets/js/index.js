// global variable
let widthLimit = 425;
let currentWidth = window.innerWidth;

// Highlights Banner
function renderZoomBanner (src){
    // accessing zoomed div
    const zoomedBanner = document.getElementById("zoomedBanner");

    // making new img elements
    const img = document.createElement("img");
    img.setAttribute("id", "highlights");
    img.setAttribute("class", "highlight");
    img.setAttribute("src", src);

    // showing new elements
    zoomedBanner.append(img);
    zoomedBanner.style.display = 'block';
}

// Highlights Logo
function renderZoomLogo (src){
    // accessing zoomed div
    const zoomedLogo = document.getElementById("zoomedLogo");

    // making new img elements
    const img = document.createElement("img");
    img.setAttribute("id", "highlights");
    img.setAttribute("class", "highlight");
    img.setAttribute("src", src);

    // showing new elements
    zoomedLogo.append(img);
    zoomedLogo.style.display = 'block';
}

// Highlights Landscape
function renderZoomLandscape (src){
    // accessing zoomed div
    const zoomedLandscape = document.getElementById("zoomedLandscape");

    // making new img elements
    const img = document.createElement("img");
    img.setAttribute("id", "highlights");
    img.setAttribute("class", "highlight bigger");
    img.setAttribute("src", src);

    // showing new elements
    zoomedLandscape.append(img);
    zoomedLandscape.style.display = 'block';
}

// removing Highlights
function remove () {
    const removeBanner = document.getElementById("zoomedBanner");
    const removeLogo = document.getElementById("zoomedLogo");
    const removeLandscape = document.getElementById("zoomedLandscape");
    const removeImg = document.getElementById("highlights");

    removeImg.remove();
    removeBanner.style.display = 'none';
    removeLandscape.style.display = 'none';
    removeLogo.style.display = 'none';
}

// Banner highlights eventListener
const bannerHighlights = document.querySelectorAll(".banner-content");
for (let bannerHighlight of bannerHighlights) {
    bannerHighlight.addEventListener('click', function (event) {

        const target = event.target;

        if (currentWidth > widthLimit) {
            renderZoomBanner(target.getAttribute("src"));
        }
    });
}

// Logo highlights eventListener
const logoHighlights = document.querySelectorAll(".logo-content");
for (let logoHighlight of logoHighlights) {
    logoHighlight.addEventListener('click', function (event) {

        const target = event.target;

        if (currentWidth > widthLimit) {
            renderZoomLogo(target.getAttribute("src"));
        }
    });
}

// Landscape highlights eventListener
const landscapeHighlights = document.querySelectorAll(".landscape-content");
for (let landscapeHighlight of landscapeHighlights) {
    landscapeHighlight.addEventListener('click', function (event) {

        const target = event.target;

        if (currentWidth > widthLimit) {
            renderZoomLandscape(target.getAttribute("src"));
        }
    });
}

// Removing highlights eventListener
const removeHighLights = document.querySelectorAll(".highlights");
for (let removeHighLight of removeHighLights) {
    removeHighLight.addEventListener("click", function () {
       remove();
    });
}

// Order button Alert
const order = document.getElementById("order-btn");
order.addEventListener('click', function () {
    alert("Order Feature Coming Soon...");
})