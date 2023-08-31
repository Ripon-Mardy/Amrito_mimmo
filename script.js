let allImage = document.querySelectorAll('.imag-gallary img')

allImage.forEach((e) => {
    e.addEventListener('click', () => {
        alert('The play boy is here')
    })
})