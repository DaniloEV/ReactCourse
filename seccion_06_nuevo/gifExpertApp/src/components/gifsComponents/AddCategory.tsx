import React, { useState } from 'react'


export interface Props {
    //El state posee la lista y le puedo setear la información dentro de él, no es la mejor opcion para emitir
    /**
     *  !NOTA el state posee la lista y le puedo setear la información dentro de él 
     *  setCategoriesState(categories => ([...categories, inputValue]))
     */
    //esta si es mejor opcion porque funciona como un emit
    onNewCategory : any
}


export default function AddCategory({ onNewCategory}: Props) {

    const [inputValue, setInputValue] = useState("")

    function onInputChange(event: any) {
        const data = event.target.value
        setInputValue(data)
    }

    function onSubmit(event: any) {
        event.preventDefault()
        const value = inputValue.trim()
        if (value !== "") {
            onNewCategory(value)
            setInputValue("")
        }

    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>

                <input type="text" className='form-control' placeholder='Buscar gifs' value={inputValue} onChange={(e) => onInputChange(e)} />
            </form>

        </div>
    )
}
