const sections = document.querySelectorAll(".section")
const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "0px",
}
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active")
    } else {
      entry.target.classList.remove("active")
    }
  })
}, options)
sections.forEach((section) => {
  observer.observe(section)
})

const button = document.querySelector("#generate-pdf")

button.addEventListener("click", () => {
  const img = document.createElement("IMG")
  img.src = "./cv.jpg"
  img.style.width = "703px"
  img.style.height = "1032px"

  const options = {
    margin: [10, 10, 10, 10],
    filename: "arquivo.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  }

  html2pdf().set(options).from(img).save()
})

const btnMobile = document.querySelector("#btnMobile")

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault()
  }
  const nav = document.querySelector("#nav")
  nav.classList.toggle("active")
  const active = nav.classList.contains("active")
  event.currentTarget.setAttribute("aria-expanded", active)
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu")
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu")
  }
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)
