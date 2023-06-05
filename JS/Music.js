const audioList = [
  {
    src: "Music/Music1.mp3",
    title: "Grand Escape",
    artist: "RADWIMPS",
    duration: "5:39"
  },
  {
    src: "Music/Music2.mp3",
    title: "Celebration",
    artist: "RADWIMPS",
    duration: "4:34"
  },
  {
    src: "Music/Music3.mp3",
    title: "Is There Still Anything That Love Can Do",
    artist: "RADWIMPS",
    duration: "6:54"
  },


  // Ajoutez d'autres éléments audio si nécessaire
];

const disk = document.querySelectorAll(".disk-logo")
const input = document.querySelectorAll("input")
const progress = document.querySelectorAll("progress")
const volumeValue = document.querySelectorAll(".volumeValue")

let currentAudioIndex = null; // Variable créer pour savoir si une musique est joué ou non, comme aucune musique est joué alors elle est "null"
const audioElements = [];


const Button = document.querySelectorAll(".button");

Button.forEach((button, index) => { // Pour chaque buouton :
  const audio = document.createElement("audio"); //On créer l'audio qui correspond 
  audio.src = audioList[index].src; // On injecte son audio 

  input.forEach((inputs, index) => {
    inputs.oninput = function (){
      progress[index].value = inputs.value;
      volumeValue[index].innerHTML = progress[index].value
      
    }

    inputs.addEventListener("input", function() {
      audio.volume = parseFloat(input[index].value) / 100
    })
  })


  
  
  
  audioElements.push(audio); // On conserve l'audio créer dans une variable "audioElements"
// Maintenant chaque Button à une musique qui lui est attribué, le Button1 à la Music1 ... 
  


  button.addEventListener("click", function() { // Lorsqu'on clique sur un bouton :   index = La musique joué ; currentAudioIndex = la musique qu'on souahite joué 
    if (currentAudioIndex !== index) { // On regarde si la musique du bouton où on a cliqué est différent de la musique qui se joue (dans le cas où y avait une musique quand on a cliqué sur le boutton), dans ce cas si il y avait une autre musique lorsqu'on a cliqué sur le button
      
      if (currentAudioIndex !== null) { // Pour savoir si il y avait une musique avant d'avoir cliqué sur le boutton, dans ce cas si il y avait une musique lorsqu'on a cliqué sur le boutton 
       
        fadeOutAudio(currentAudioIndex) // Alors on arrête de jouer la musique 
        Button[currentAudioIndex].classList.remove("play"); // et on remet le bouton pause 
        disk[currentAudioIndex].classList.remove("rotate")
      }
// Maintenant on a enlevé la musique qui était joué (si il y en avait une) quant on clique sur le boouton
      currentAudioIndex = index; // Désormais la musique qu'on veut joué devient la musique joué 
      
      fadeInAudio(currentAudioIndex) // Et on active la musique 
      button.classList.add("play");
      disk[index].classList.add("rotate")
    } 
    
    
    else { // Dans le cas si on veut arrêter la musique qui est train de jouer et qu'on clique sur le boutton qui lui correspond, ainsi currentAudioIndex === index donc la fonction au dessus ne s'activera pas et on fera la fonction en dessous :
      if (audioElements[currentAudioIndex].paused) { // Si on avait mis la musique en pause et qu'on veut la jouer 
        fadeInAudio(currentAudioIndex);
        button.classList.add("play");
        disk[index].classList.add("rotate")
      } else {
        
        fadeOutAudio(currentAudioIndex) // Si on avait mis la musique en play et qu'on veut l'arrêter 
        button.classList.remove("play");
        disk[index].classList.remove("rotate")
      }
    }
  });
});


function fadeOutAudio(index) {
  const audio = audioElements[index];
  audio.volume = parseFloat(input[index].value) / 100;
  
  const fadeOut = () => {
    if (audio.volume > 0.01) {
      audio.volume -= 0.01;

      // Arrondir le volume à 0 si la valeur atteint ou descend en dessous du seuil
      if (audio.volume <= 0.01) {
        audio.volume = 0;
      }
      console.log(audio.volume)
      setTimeout(fadeOut, 10)
    } else {
      audio.pause();
      audio.volume = 1;
    }
  };
fadeOut()
  
}

function fadeInAudio(index) {
  const audio = audioElements[index];
  audio.volume = 0;
  audio.play();
  
  const fadeInStep = () => {
    if (audio.volume < parseFloat(input[index].value) / 100) {
      audio.volume += 0.01;
      console.log(audio.volume)
      
      setTimeout(fadeInStep, 10)
      
    } else {
      audio.volume = parseFloat(input[index].value) / 100;
    }
  };

  fadeInStep();
  
}