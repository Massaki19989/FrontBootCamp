import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'

function Register(){
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

                            <form action="" method="post">

                                <label htmlFor="name">Nome Completo <span className="text-danger">*</span> </label>
                                <input type="text" name='name' id='name' required placeholder='Ex: João Silva'/>

                                <label htmlFor="cpf">CPF <span className="text-danger">*</span> </label>
                                <input type="text" name='cpf' id='cpf' required placeholder='Ex: 123.456.789-01'/>

                                <label htmlFor="email">E-mail <span className="text-danger">*</span> </label>
                                <input type="email" name='email' id='email' required placeholder='Ex:joao@email.com'/>

                                <label htmlFor="password">Senha <span className="text-danger">*</span> </label>
                                <input type="password" name='password' id='password' required placeholder='Ex: joao123' />

                                <input type="submit" value="Entrar" />

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