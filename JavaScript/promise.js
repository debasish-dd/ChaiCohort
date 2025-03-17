const myPromise = new Promise((resolve, reject) => {
  //   console.log('this is my promise');
  resolve()
  // reject()
})

myPromise.then(() => {
  //   console.log('promise done')
})

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('this is promise two')
    resolve({ user: 'debasish', isActive: true })
  }, 2000)
})
promiseTwo.then(function (user) {
  console.log(`the user is ${user.user} and ${user.isActive}`)
})

new Promise((resolve, reject) => {
  let error = true
  if (!error) {
    resolve()
  } else {
    reject(error)
  }
})
  .then(() => {
    console.log('the promise ran succesfully')
  })
  .catch(data => {
    console.log('ERROR: something went wrong', data)
  })
