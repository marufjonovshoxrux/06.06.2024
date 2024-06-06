const form = document.forms.namedItem('sigup')
const inputs = document.querySelectorAll('input')


form.onsubmit = (event) => {
    event.preventDefault()
    let error = false
   
    inputs.forEach((inp) => {
        if (inp.value.length === 0) {
            error = true
            inp.style.borderColor = 'red'
        } else {
            inp.style.borderColor = 'blue'

        }
    }) 

    if (error) {
        return
    }

    submit()
}


function submit() {
     const user = []

     const fm = new FormData(form)

     fm.forEach((val, key) => user[key] = val)


     console.log(user);
}


