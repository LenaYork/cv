const pianoCard = document.querySelector(".piano");
const pianoDescription = document.querySelector("#piano");
pianoCard.addEventListener("mouseover", () => {
  pianoDescription.style.opacity = 0.9;
})

pianoCard.addEventListener("mouseout", () => {
  pianoDescription.style.opacity = 0;
})

const bookstoreCard = document.querySelector(".bookstore");
const bookstoreDescription = document.querySelector("#bookstore");
bookstoreCard.addEventListener("mouseover", () => {
  bookstoreDescription.style.opacity = 0.9;
})

bookstoreCard.addEventListener("mouseout", () => {
  bookstoreDescription.style.opacity = 0;
})

const meritumCard = document.querySelector(".meritum");
const meritumDescription = document.querySelector("#meritum");
meritumCard.addEventListener("mouseover", () => {
  meritumDescription.style.opacity = 0.9;
})

meritumCard.addEventListener("mouseout", () => {
  meritumDescription.style.opacity = 0;
})