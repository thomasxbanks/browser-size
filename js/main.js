"use strict"

function screenDimensions(){
  let browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  let browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  let screenWidth = screen.width
  let screenHeight = screen.height

  const msgSW = document.getElementById('msgSW')
  const msgSH = document.getElementById('msgSH')
  const msgBW = document.getElementById('msgBW')
  const msgBH = document.getElementById('msgBH')
  msgSW.innerHTML = screenWidth + "px"
  msgSH.innerHTML = screenHeight + "px"
  msgBW.innerHTML = browserWidth + "px"
  msgBH.innerHTML = browserHeight + "px"

}

screenDimensions()

window.addEventListener("resize",
    screenDimensions
);
