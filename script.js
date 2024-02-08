const checked = document.querySelectorAll('.circle')
const allInput = document.querySelectorAll('.input')
const showError = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


checked.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {

        const allInputFilled = [...allInput].every(function (input) {
            return input.value
        })
        if (allInputFilled) {
            checkbox.parentElement.classList.toggle('completed')
            progressValue.style.width = '33.33%'
        }
        else {
            showError.style.display = 'Block'
        }
    })
})

// allInput.forEach((input)=>{
//     input.addEventListener('focus', ()=>{
//         showError.classList.remove('error-label')
//     })
// })

