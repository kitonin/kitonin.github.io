function startTimer() {
    let my_timer = document.getElementById("timer");
    let time = my_timer.innerHTML;
    let arr = time.split(":");
    let m = arr[0];
    let s = arr[1];
    if (s == 0) {
      if (m == 0) {
        endGameModal.classList.remove('deleted');
        endTitle.textContent = 'You lose';
        return;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    my_timer.innerHTML = m+":"+s;
    timerId = setTimeout(startTimer, 1000);
};
let startBtn = document.getElementById('start-btn');
function deleteBtn() {
  this.classList.add('deleted');
  this.parentNode.classList.add('deleted');
}
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', deleteBtn);

let newGameBtn = document.getElementById('modal-btn-play');
function reloadPage() {
  location.reload()
}
newGameBtn.addEventListener('click', reloadPage);