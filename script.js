function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); /* these will toggle the open class for styling */
    icon.classList.toggle("open");
}