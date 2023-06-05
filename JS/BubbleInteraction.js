const Bubble = document.querySelectorAll(".bubbleNav");


;


Bubble.forEach((bubble, index) => {
  
  bubble.addEventListener("click", () => {
    const windowHeight = window.innerHeight
    if (index <= 3) {
    scrollButton = true // Pour éviter que le WallpaperSmooth s'active pendant le scroll
    window.scrollTo({
          
      top: windowHeight * (index+1),
      behavior: 'smooth' // Pour une transition fluide
      
      
    });
    setTimeout(function() {  
      scrollButton = false
      
    },1500)
  } else {
    scrollButton = true
    window.scrollTo({
          
      top: 0,
      behavior: 'smooth' // Pour une transition fluide
      
      
    });
    setTimeout(function() {  
      scrollButton = false
      
    },2000)
  }
  });
});
