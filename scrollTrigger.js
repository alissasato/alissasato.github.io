//Get the button:
stickyHeader = document.getElementById("stickyHeader");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.classList.add("active");
    stickyHeader.classList.add("active");
  }
  else {
    mybutton.classList.remove("active");
    stickyHeader.classList.remove("active");
  }
}
