//movement animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const desc = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
//moving

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX)/15;
  let yAxis = (window.innerHeight / 2 - e.pageY)/15;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease"
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
})



container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none"
  title.style.transform = "translateZ(250px)"
  sneaker.style.transform = "translateZ(250px)"
  purchase.style.transform = "translateZ(50px)"
  desc.style.transform = "translateZ(150px)"
  sizes.style.transform = "translateZ(150px)"
})

//animate items

