document.addEventListener("DOMContentLoaded", function() {
  let menu = document.querySelector('.menu')
  let toggle = document.querySelector('.toggle')
  toggle.onclick = function() {
    menu.classList.toggle('active')
  }
});