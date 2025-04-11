import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'

function Login(){
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

                            <form action="" method="post">
                                <label htmlFor="email">E-mail <span className="text-danger">*</span> </label>
                                <input type="email" name='email' id='email' required placeholder='Ex:joao@email.com'/>

                                <label htmlFor="password">Senha <span className="text-danger">*</span> </label>
                                <input type="password" name='password' id='password' required placeholder='Ex: joao123' />

                                <input type="submit" value="Entrar" />

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