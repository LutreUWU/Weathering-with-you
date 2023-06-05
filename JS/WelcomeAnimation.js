Character = document.querySelector(".Character")
Batiment = document.querySelector(".batimentDiv")
Title = document.querySelector(".Title")
NavBar = document.querySelector(".headbar")

setTimeout(() => {
  Title.style.opacity = "1";
},2000)

setTimeout(() => {
  Batiment.style.bottom = "0";
},3000)

setTimeout(() => {
  Character.style.top = "0";
  NavBar.style.opacity = "1";
  NavBar.style.transform = "rotate(0deg)"
},4000)

