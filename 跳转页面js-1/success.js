let back = document.querySelector('#back')
let text = document.querySelector('#text')
let time = 5

timer()
setInterval(timer, 1000)
function timer() {
  if (time === 0) {
    location.href = 'http://127.0.0.1:5500/index.html'
  } else {
    text.innerHTML = `Go back at ${time} sec`
    time--
  }
}


back.addEventListener('click', function () {
  location.href = 'http://127.0.0.1:5500/index.html'
})
