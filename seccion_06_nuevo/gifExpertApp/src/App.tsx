import { useState } from 'react'

import './App.css'
import AddCategory from './components/gifsComponents/AddCategory'
import GridGridItem from './components/gifsComponents/GridGridItem'

function App() {
  //!Nota no colocar states con condicionales
  const [categories, setCategories] = useState<string[] | []>(['item 1', ' item  2', 'item  3'])

  //tarea 1
  function addCategory(item: string) {

    const findIndex = categories.findIndex(x => x == item);
    if (findIndex == -1) {
      const ramdon = `${item}`
      setCategories([...categories, ramdon])
    }


  }

  return (
    <>
      <h1>Seccion 06</h1>
      {/* Input 1° paso con espera de una propiedad que se espera para guardar en el state, 
          al ser un state compartido puede hacerlo,
          no es la mejor opcion ya que hace que se suponga como se realiza la acción*/}
      {/* <AddCategory setCategoriesState={ setCategories }></AddCategory> */}

      {/* Input 1,1° el on casi siempre es porque emite algo, un evento*/}
      <AddCategory onNewCategory={(event: string) => addCategory(event)}></AddCategory>
      {/* List 2° paso listado*/}
      {categories.map((x) => (

        <GridGridItem key={x} categoryTitle={x}></GridGridItem>

      ))}




    </>
  )
}

export default App
