const images = document.querySelectorAll('.image');
const imageArray = []; 

let scrollButton = false;
let scrolling = false;
let scrollTimeout;

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  imageArray.push(image);
}

const image1 = imageArray[0];
const image2 = imageArray[1];
const image3 = imageArray[2];
const image4 = imageArray[3];
const image5 = imageArray[4];

window.addEventListener('scroll', function() {
  if (!scrolling && scrollButton == false) {
scrolling = true;


scrollTimeout = setTimeout(function() {
  handleScroll();
  
  scrolling = false;
  
}, 400); // Délai de 250 millisecondes pour vérifier si l'utilisateur a fini de faire défiler
}
  
})

function handleScroll() {
const image1Rect = image1.getBoundingClientRect();
const image2Rect = image2.getBoundingClientRect();
const image3Rect = image3.getBoundingClientRect();
const image4Rect = image4.getBoundingClientRect();
const image5Rect = image5.getBoundingClientRect();
const windowHeight = window.innerHeight;


console.log("-- " + image1Rect.top)
console.log(image2Rect.top)
console.log(windowHeight)

  if (image2Rect.top > -image1Rect.top && -image1Rect.top < windowHeight)  {
    
        window.scrollTo({
          
          top: image1Rect.top,
          behavior: 'smooth' // Pour une transition fluide
          
        });
        return
        } else if (image2Rect.top < -image1Rect.top  && -image1Rect.top < windowHeight) {
        
        window.scrollTo({
          top: windowHeight,
          behavior: 'smooth' // Pour une transition fluide
        });
        return
        }
  if (image3Rect.top > -image2Rect.top && -image2Rect.top < windowHeight) {
    
    window.scrollTo({
          
          top: windowHeight,
          behavior: 'smooth' // Pour une transition fluide
        }); 
        return
        } else if (image3Rect.top < -image2Rect.top && -image2Rect.top < windowHeight ) {
        
        window.scrollTo({
          top: windowHeight*2,
          behavior: 'smooth' // Pour une transition fluide
        });
        return
        }
  
  if (image4Rect.top > -image3Rect.top && -image3Rect.top < windowHeight) {
    
    window.scrollTo({
          
          top: windowHeight*2,
          behavior: 'smooth' // Pour une transition fluide
        }); 
        return
        } else if (image4Rect.top < -image3Rect.top && -image3Rect.top < windowHeight ) {
        
        window.scrollTo({
          top: windowHeight*3,
          behavior: 'smooth' // Pour une transition fluide
        });
        return
        }     
  if (image5Rect.top > -image4Rect.top && -image4Rect.top < windowHeight) {
    
    window.scrollTo({
          
          top: windowHeight*3,
          behavior: 'smooth' // Pour une transition fluide
        }); 
        return
        } else if (image5Rect.top < -image4Rect.top && -image4Rect.top < windowHeight ) {
        
        window.scrollTo({
          top: windowHeight*4,
          behavior: 'smooth' // Pour une transition fluide
        });
        return
        }   
}