
document.querySelector('#form1').addEventListener('submit', async function(event){
    event.preventDefault()

    const form = event.target
    const formContent = new FormData()

   
    formContent.append('firstName', form.firstName.value)
    formContent.append('lastName', form.lastName.value) 
    formContent.append('profile', form.profile.files[0])

    const serverFeedBack = await fetch("/submit", {
        method:'POST',
        // headers: {'Content-Type': 'application/json',},
        body: formContent
    })

    const result = await serverFeedBack.json()

    // document.querySelector('#contact-result').innerHTML = `${result.text}, HI ${result.firstName} ${result.lastName} <div><img src="${result.image}"></div>`
    document.querySelector('#contact-result').innerHTML = `${result.feedback}`

})