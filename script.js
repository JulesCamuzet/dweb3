const jules = document.getElementById("jules")

jules.addEventListener('mouseover', () => {
  console.log("Jules !")
})

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((para) => {
  para.addEventListener("mouseover", (event) => {
    console.log(`le plsu beau => "${event.target.id}" `);
  });
});