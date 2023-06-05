textFloating = document.querySelectorAll(".textNav");
      
      
      

textFloating.forEach(text => {
  const world = text.textContent.split('');
  Div = document.createElement("div")
  Div.classList.add("DivTextBubble")
  
  world.forEach ((letter, index) => {
    const x = Math.random() * 5 + 4
  
    
    const time = Math.random() * 0.5 + 0.5

    const DivSpan = document.createElement('div')
    
    DivSpan.style.visibility = "visible"
    const span = document.createElement('em');
    span.classList.add("textMovingBubble")
    
   
    span.textContent = letter;
        
      const MovingText = `@keyframes myAnimation {
          0%{
            bottom:0px
                     
          }

          100%{
            
            bottom :` + x + `px
          }

          
        }`;
      
      // Création d'un styleSheet
      const styleSheet = document.createElement('style');
      document.head.appendChild(styleSheet);

      // Ajout de la règle @keyframes au styleSheet
      styleSheet.sheet.insertRule(MovingText, 0);

    span.style.animation =  "myAnimation "+ time + "s infinite alternate-reverse ease-in-out";

    DivSpan.appendChild(span)
    Div.appendChild(DivSpan)
    text.appendChild(Div);
    
  })
  
  
  
  
})


