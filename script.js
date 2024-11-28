let menu_icon_box = document.querySelector(".menu_icon_box");
let box = document.querySelector(".box");
let links = document.querySelectorAll(".box nav ul li a");
let bar = document.querySelector(".bar");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

links.forEach(link => {
    link.onclick = function() {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    };
});

document.addEventListener("scroll", function() {
  const brancoSection = document.getElementById("branco");
  const menuIconBox = document.querySelector(".menu_icon_box");
  const brancoTop = brancoSection.getBoundingClientRect().top;
  if (brancoTop <= 0) {
    menuIconBox.classList.add("line-black");
  } else {
    menuIconBox.classList.remove("line-black"); 
  }
});

document.addEventListener("scroll", function() {
    const azulSection = document.getElementById("azul");
    const menuIconBox = document.querySelector(".menu_icon_box");
    const azulTop = azulSection.getBoundingClientRect().top;
    if (azulTop <= 0) {
      menuIconBox.classList.add("line-white");
    } else {
      menuIconBox.classList.remove("line-white"); 
    }
  });



document.querySelectorAll('.text').forEach(text => {
    text.addEventListener('mouseover', function() {
        const newBg = this.getAttribute('data-bg');
        document.getElementById('background-container').style.backgroundImage = `url(${newBg})`;
    });
});


