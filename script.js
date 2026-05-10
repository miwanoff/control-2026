let timer;
let left = 0;
function moveR(el) {
  const blueBlock = document.getElementById(el);
  function go() {
    if (left < 350) {
      left++;
      blueBlock.style.left = left + "px";
      console.log(left, blueBlock.style.left);
    } else {
      stop();
    }
  }
  //go();
  timer = setInterval(go, 10);
}

function stop() {
  clearInterval(timer);
}
