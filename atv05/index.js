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
