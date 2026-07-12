function fetchProducts(){
  return new Promise((resolve,reject)=>{
    fetch('https://dummyjson.com/products')
    .then(response => {
        if(!response.ok){
            reject("Failed to Fetch Data")
        }
        return response.json()
    }).then(data => {
        resolve(data)
    }).catch(error=> {
        reject(error)
    })
  })
}


fetchProducts().then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error)
});