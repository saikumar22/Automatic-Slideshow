
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var myslides = document.getElementsByClassName("slideboxes");
    for (i = 0; i < myslides.length; i++) {
        myslides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > myslides.length) {slideIndex = 1}    
    myslides[slideIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
}