const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const circle = document.querySelectorAll(".circle")
const line = document.querySelectorAll(".progress-line")
let index = 1;
function active() {
    search.classList.toggle('')
}
prev.onclick = active
next.addEventListener("click", (event) => {
    circle[index].classList.add("circle-active")
    line[index1].classList.add("progress-line-active")
    index ++
    index1 ++
})
let index3 = index
let index4 = index3
console.log(index)
prev.addEventListener("click", (event) => {
    circle[index].classList.remove("circle-active")
    line[index1].classList.remove("progress-line-active")
    index ++
    index1 ++
})