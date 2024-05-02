const form = document.querySelector('form')
const email = document.querySelector("input[type=email]")
const password = document.querySelector("input[type=password]")

form.addEventListener("submit",onSubmitFunction)

function onSubmitFunction(event){
    if(email === '' || password === ''){
        event.preventDefault()
        alert('please fill the form')
        return false
    }
}