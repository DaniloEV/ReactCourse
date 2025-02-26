import { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import AddCategoryEmitFather from './components/AddCategoryEmitFather';
// import GifGrid from './components/Grid/GifGridList';
import GifGridItem from './components/Grid/GifGridItem';


const GifExpertApp = () => {
  // Es mejor que tenga valor inicial
  const [categories, setCategories] = useState([]);
  // const [categoryValue, setCategoryValue] = useState("")




  function onAddCategory(event) {
    if (!categories.includes(event)) {
      // tambien se puede hacer por medio de un push a la categoría antes, pero obligatorio debo de volver a crear el objeto nuevo, 
      // ya que si lo hago con el push directo no le gusta, esto debido a que a React no le gusta las mutaciones como el push
      const newObj = [...categories, event];
      setCategories((x) => newObj)
      // setCategoryValue((x) => event)
    }

  }


  return (
    <>
      {/*Titulo  */}
      <h1>GifExpertApp</h1>



      {/* Input   */}
      {/* <AddCategory setCategories={setCategories}></AddCategory> NO ES LA MEJOR OPCION PORQUE OBLIGA A SABER QUE TENGO POR FUERA*/}
      <AddCategoryEmitFather onNewCategory={onAddCategory}></AddCategoryEmitFather>
      {/* <button className='button' onClick={(event) => onAddCategory(event)}>Agregar</button> */}
      {/* Lista  */}
      <div>
            <ol>
                {categories.map(cat =>
                    <GifGridItem category={cat} key={cat}></GifGridItem>
                )}
            </ol>
        </div>

      {/* <GifGrid categoryValue={categoryValue}></GifGrid> */}



    </>
  )
}




export default GifExpertApp
