import { useState } from "react"

const AddCategoryEmitFather = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState("")

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() != "") {
            // !NOTA en react 18 no es necesario reenderizar dos veces ahora cuando finaliza la función tira todo
            onNewCategory(inputValue)
            setInputValue("")
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

export default AddCategoryEmitFather
