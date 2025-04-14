import '../styles/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import loginApi from '../services/login-api'
import { useEffect } from 'react'

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        const errorElement = document.querySelector('.error')

        if(errorElement){
            if(error != ''){
                errorElement.innerHTML = `<p>${error}</p>`
            }else{
                errorElement.innerHTML = ''
            }
        }
        
    }, [error])
    


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setLoading(true)
        setError('')

        try{
            const response = await loginApi(email, password)

            console.log(response)

            alert("Login bem sucedido!")
        }catch(err: any){
    
            setError(err || "Falha no login. Tente novamente!")
        }finally{
            setLoading(false)
        }

    }

    return (
        <div className="Login">
            <div className="container-fluid rounded overflow-hidden h-100">
                <div className="row h-100">
                    <div className="col-6">
                        <div className="image"></div>
                    </div>{/* col-6 */}

                    <div className="col-6 p-2">
                        <div className="content">
                            <div className="logo">
                                <div className='logo-image'><span><FontAwesomeIcon icon={faPersonRunning} /></span></div>
                                <h1>FITMEET</h1>
                            </div>{/*LOGO*/}

                            <div className="message">
                                <h2>BEM-VINDO DE VOLTA!</h2>
                                <p>Encontre parceiros para treinar ao ar livre. <br /> Conecte-se e comece agora! </p>
                            </div>{/* message */}

                            <div className="error"></div>
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <label htmlFor="email">E-mail <span className="text-danger">*</span> </label>
                                <input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} id='email' required placeholder='Ex:joao@email.com'/>

                                <label htmlFor="password">Senha <span className="text-danger">*</span> </label>
                                <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} id='password' required placeholder='Ex: joao123' />

                                <input type="submit" value="Entrar" disabled={loading} />

                                <p>Ainda não tem conta? <a href="/register">Cadastre-se</a></p>
                            </form>                   
                        </div>{/* content */}
                    </div>{/* col-6 */}
                </div>{/* row */}
                
            </div>{/*container*/}
            
        </div>
    )
}

export default Login