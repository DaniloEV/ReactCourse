import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "",
        email: ""
    })

    function onInputChange(event: any) {

        let { target } = event;



        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    // useEffect(() => {
    //     console.log("🚀 ~ useEffect ")
    // }, [])

    useEffect(() => {
        console.log("🚀 ~ Solo la primera vez ")
    }, [])

    useEffect(() => {
        console.log("🚀 ~ Solo cuando acualiza el form y la primera vez ")
    }, [formState])

    useEffect(() => {
        console.log("🚀 ~ Solo cuando acualiza el email address y la primera vez ")
    }, [formState.email])


    return (
        <div>
            <h1>Forumulario Simple</h1>
            <div className='row'>
                <div className='col-sm-12 col-lg-6'>
                    <input type="text" className='form-control' placeholder='Username' value={formState.username} onChange={(e) => onInputChange(e)}
                        name='username' />
                    {
                        (formState.username == "strider2") && <Message></Message>
                    }

                </div>
                <div className='col-sm-12 col-lg-6'>
                    <input type="email" className='form-control' placeholder='Email Address' value={formState.email} onChange={(e) => onInputChange(e)}
                        name='email' />
                </div>

            </div>

        </div>
    )
}

export default SimpleForm
