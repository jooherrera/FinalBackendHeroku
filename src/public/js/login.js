const btn = document.getElementById('btnChat')
const email = document.getElementById('email')
const password = document.getElementById('password')

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  //   if (email.value !== '') {
  //     info = { email: email.value, msg: msg.value }
  //     socket.emit('chatFront', info)
  //   }

  if (!email.value || !password.value) {
    throw new Error('Completar los campos')
  }

  const object = {
    email: email.value,
    password: password.value,
  }

  await fetch(`/api/v1/login`, {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json',
    },
    redirect : 'follow'
  })

  



  

// const res = await JSON.parse(resp)

  // const res = await resp.json()
 


  // localStorage.setItem('token', res.body.data.token)

  // console.log(res)

  // await fetch(`htto`, {
  //   method: 'GET',
  //   headers: new Headers({
  //     'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //     'Content-Type': 'application/json',
  //     "Accept": "application/json"
  //   })
  // })

  


})
