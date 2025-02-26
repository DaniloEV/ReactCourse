import { useState } from "react"

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() != "") {
            // !NOTA para pasar states y actualizar 
            setCategories((allStateBefore) => [...allStateBefore, inputValue])
        }

    }
    return (

        <div>
            <form action="" onSubmit={onSubmit}>
                {/* El event es un html input element se lo puedo pasar para que le setee la data , no es necesario el evento porque el ya lo conoce en la función*/}
                <input type="text" placeholder="Buscar Nombre" value={inputValue} onChange={onInputChange} />


            </form>

        </div>
    )
}

export default AddCategory
