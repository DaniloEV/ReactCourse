

// //Import Export
// import {heroes} from './data/heroes';

// console.log(heroes)



const promesa = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      const data = "Hola soy Danilo"
      resolve(data)
    }, 2000)
  } catch (error) {
    reject(error)
  }
});



let valor = promesa.then(x => {
  console.log(x)
}).catch(error => {

})