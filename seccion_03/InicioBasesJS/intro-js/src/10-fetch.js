const apiKey = "W8cgEArZ5zfJrsPiN45aJ4CaqogYjXLu"


const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// httpCall.then(response=>{
//   console.log(response)

//   response.json().then(data => {
//     console.log("🚀 ~ response.json ~ data:", data)
//   })
// }).catch(err =>{

// })

// !NOTA promise anidado
httpCall
.then(res => res.json())
.then(dataRes => {
  console.log("🚀 ~ response.json ~ data:", dataRes)
  console.log("🚀 ~ response.json ~ images:", dataRes.data.images.original)

  // const image = dataRes.data.images.original.url;
  const {url} = dataRes.data.images.original;

  let img = document.createElement("img");
  img.src = url
  document.body.append(img)


}).catch(err => {
  console.log(err)
})