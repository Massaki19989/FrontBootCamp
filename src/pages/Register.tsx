import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import RegisterApi from '../services/register-api'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
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

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        setLoading(true)
        setError('')
        try{
            const response = await RegisterApi(name, cpf, email, password)

            console.log(response)

            alert("Registro bem sucedido")
        }catch(err: any){

            setError(err || "Falha no login. Tente novamente.")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="Register">
            
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
                                <p> Cadastre-se para encontrar parceiros de treino e começar a se exercitar ao ar livre. <br/> Vamos juntos! 💪 </p>
                            </div>{/* message */}

                            <div className="error">
                                
                            </div>

                            <form action="" method="post" onSubmit={handleSubmit}>

                                <label htmlFor="name">Nome Completo <span className="text-danger">*</span> </label>
                                <input type="text" name='name' id='name' required placeholder='Ex: João Silva' onChange={(e)=>{setName(e.target.value)}} />

                                <label htmlFor="cpf">CPF <span className="text-danger">*</span> </label>
                                <input type="text" name='cpf' id='cpf' required placeholder='Ex: 123.456.789-01' onChange={(e)=>{setCpf(e.target.value)}}/>

                                <label htmlFor="email">E-mail <span className="text-danger">*</span> </label>
                                <input type="email" name='email' id='email' required placeholder='Ex:joao@email.com' onChange={(e)=>{setEmail(e.target.value)}}/>

                                <label htmlFor="password">Senha <span className="text-danger">*</span> </label>
                                <input type="password" name='password' id='password' required placeholder='Ex: joao123' onChange={(e)=>{setPassword(e.target.value)}}/>

                                <input type="submit" value="Entrar" disabled={loading} />

                                <p>Já tem uma conta? <a href="/login">Faça login</a></p>
                            </form>                   
                        </div>{/* content */}
                    </div>{/* col-6 */}
                </div>{/* row */}
                
            </div>{/*container*/}
            
        </div>
    )
}

export default Register