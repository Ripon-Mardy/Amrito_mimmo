let allImage = document.querySelectorAll('.imag-gallary img')

allImage.forEach((e) => {
    e.addEventListener('click', () => {
        alert('The play boy is here')
    })
})



window.addEventListener('load', () => {
    let audio = document.querySelector('audio');
   audio.play();
})