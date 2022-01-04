// window.addEventListener('load', function () {
let preview = document.querySelector('.preview')
let mask = document.querySelector('.mask')
let big = this.document.querySelector('.big')

preview.addEventListener('mouseover', function () {
  mask.style.display = 'block'
  big.style.display = 'block'
})

preview.addEventListener('mouseout', function () {
  mask.style.display = 'none'
  big.style.display = 'none'
})

preview.addEventListener('mousemove', function (e) {
  let maskY = e.pageY - this.offsetTop - this.offsetHeight / 2
  let maskX = e.pageX - this.offsetLeft - this.offsetWidth / 2
  let maxMove = preview.offsetHeight - mask.offsetHeight

  if (maskY <= 0) {
    maskY = 0
  } else if (maskY >= maxMove) {
    maskY = maxMove
  } 

  if (maskX <= 0) {
    maskX = 0
  } else if (maskX >= maxMove) {
    maskX = maxMove
  }

  mask.style.top = maskY + 'px'
  mask.style.left = maskX + 'px'


  let bigImg = document.querySelector('.big-img')
  let bigMove = bigImg.offsetHeight - big.offsetHeight
  let bigY = maskY / maxMove * bigMove
  let bigX = maskX / maxMove * bigMove
  console.log(bigY);

  bigImg.style.top = -bigY + 'px'
  bigImg.style.left = -bigX + 'px'
})
// })


