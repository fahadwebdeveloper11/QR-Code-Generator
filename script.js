const urlHere = document.querySelector('#url')
const generateBtn = document.querySelector('.generate-btn')
const imageHere = document.querySelector('.image img')
const imageDiv = document.querySelector('.image')

generateBtn.addEventListener('click', function () {

    if (urlHere.value === '') {
        alert("Please Enter URL or text")
    }
    else {
        imageDiv.style.transform = "scale(1)"
        imageHere.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + urlHere.value
        imageHere.style.marginTop = "20px"
    }
    // generateBtn.style.marginTop = "20px"
    urlHere.value = ''
})