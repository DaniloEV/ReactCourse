const apiKey = "W8cgEArZ5zfJrsPiN45aJ4CaqogYjXLu"





const getImage = async () =>{

  const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const responseData = await httpCall.json()
  console.log(responseData)

  return responseData
}


getImage().then(dataRes=>{
    const {url} = dataRes.data.images.original;

  let img = document.createElement("img");
  img.src = url
  document.body.append(img)

})


// httpCall.then(response=>{
//   console.log(response)

//   response.json().then(data => {
//     console.log("🚀 ~ response.json ~ data:", data)
//   })
// }).catch(err =>{

// })

// !NOTA promise anidado
// httpCall
// .then(res => res.json())
// .then(dataRes => {
//   console.log("🚀 ~ response.json ~ data:", dataRes)
//   console.log("🚀 ~ response.json ~ images:", dataRes.data.images.original)

//   // const image = dataRes.data.images.original.url;
//   const {url} = dataRes.data.images.original;

//   let img = document.createElement("img");
//   img.src = url
//   document.body.append(img)


// }).catch(err => {
//   console.log(err)
// })