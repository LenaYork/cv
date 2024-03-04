const cards = document.querySelectorAll(".project");

cards.forEach(card => {
  const projectTitle = card.classList[1];

  card.addEventListener("mouseover", () => {
    document.querySelector(`#${projectTitle}`).style.opacity = 0.9;
  })

  card.addEventListener("mouseout", () => {
    document.querySelector(`#${projectTitle}`).style.opacity = 0;
  })
})

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth;
  const contactContainer = document.querySelector('.contact-container');
  const avatar = this.document.querySelector('.avatar');
  if (windowWidth >= 500 && windowWidth <= 676) {
    contactContainer.style.marginLeft = `${-299 + windowWidth - 676}px`;

  } else {
    contactContainer.style.marginLeft = '0';
  }

  if (windowWidth >= 600 && windowWidth <= 676) {
    avatar.style.marginLeft = `${-1 + windowWidth - 676}px`;
  } else if (windowWidth > 676 || windowWidth < 500) {
    avatar.style.marginLeft = 0;
  } else if (windowWidth >= 500 && windowWidth <= 600) {
    avatar.style.marginLeft = `-75px`;
  }

}); 
