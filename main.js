const accordionBtn = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(panel);
    removeSelection(accordionBtn[i], accordionBtn);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    
  });
}

function removeSelection(selected, elements) {
  for (let i = 0; i < accordionBtn.length; i++) {
      if (accordionBtn[i] != selected) {
        accordionBtn[i].classList.remove('active');
        var panel = accordionBtn[i].nextElementSibling;
        console.log(panel);
        panel.style.maxHeight = null;
      }
  }
}
