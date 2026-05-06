document.querySelectorAll<HTMLElement>(".hover-border").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    el.style.setProperty("--x", `${x}px`)
    el.style.setProperty("--y", `${y}px`)
  })
})