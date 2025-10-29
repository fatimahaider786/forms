 const btnClick = document.getElementById("btnClick")
    btnClick.addEventListener("click", function() {
      alert("Single Click Ho Gaya! ")
    })


const dblBtn = document.getElementById("btnDblClick")
    dblBtn.addEventListener("dblclick", function () {
      alert("Double click ON HOJAI!")
    })

    const btnOver = document.getElementById("btnOver")
    btnOver.addEventListener("mouseover", function () {
      alert("mouse upper chala gya ha")
    })

    const btnOut = document.getElementById("mouseout")
    btnOut.addEventListener("mouseout", function () {
      alert("mouse button sa bahir nikal gya")
    })

    const inputbox = document.getElementById("inputbox")
    inputbox.addEventListener("keydown", function () {
      alert("key press hoi");
    })

const namebox=document.getElementById("box")
    namebox.addEventListener("keyup", function() {
      alert("Key chhodi gayi! 😅")
    })

    const box = document.getElementById("nameBox");
    box.addEventListener("focus", function() {
      box.style.backgroundColor = "yellow"
    });