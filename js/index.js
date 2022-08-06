const url = 'https://api.adviceslip.com/advice'

window.addEventListener('load', () => {
    consumeApi()
    document.querySelector('.container').style.visibility = 'visible'
})

document.querySelector("button").addEventListener('click', () => {
    consumeApi()
    document.querySelector('.advice__box').style.visibility = 'hidden'
    document.querySelector('.advice__box').style.visibility = 'visible'

})

function consumeApi() {
    fetch(url, {
        cache: "no-cache"
    })
    .then(response => response.json())
    .then(advice => {
        const slip = advice.slip
        document.querySelector('.advice__number').innerText = `A D V I C E # ${slip.id}`
        document.querySelector('.advice').innerText = `"${slip.advice}"`
    })
    .catch(error => {
        console.log(error)
    })
}