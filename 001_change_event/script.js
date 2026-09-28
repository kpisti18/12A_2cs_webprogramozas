const city = document.querySelector('#city')
//console.log(city)

window.addEventListener('DOMContentLoaded', cityChange)
city.addEventListener('change', cityChange)

function cityChange() {
    //console.log('Műkdik')
    const selectedCity = city.value
    //console.log(selectedCity)
    
    const demo = document.querySelector('#demo')
    //console.log(demo)
    demo.textContent = selectedCity
    
    const imageDiv = document.querySelector('#image')
    //console.log(imageDiv)
    
    const img = document.createElement('img')
    img.src = `./img/${selectedCity}.jpg`
    img.alt = selectedCity
    img.title = selectedCity
    //console.log(img)
    
    imageDiv.replaceChildren(img)
    //console.log(imageDiv)
}