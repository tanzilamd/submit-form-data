const scriptURL = 'https://script.google.com/macros/s/AKfycbzZZVNi7t2HK9N3dCMYsMhAW0iWNcR0tzUyOJNRjrr1YDKoQgRKuTbWqWJujtW6AExnFQ/exec'
     const form = document.forms['google-sheet']
                  
        form.addEventListener('submit', e => {
            e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
        })
        

        