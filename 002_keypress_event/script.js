const demo = document.querySelector('#demo')
const area = document.querySelector('#area')

//console.log(demo, area)

area.addEventListener('keyup', keyEvent)

function keyEvent() {
    //console.log(area.value)
    demo.textContent = area.value
}