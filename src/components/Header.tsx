import Logo from "./Logo"
import "../styles/Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

interface dataHeader {
    name: string | null,
    email: string | null,
    level: number | null ,
    avatar: string | null
}

function Header({name, email, level, avatar }: dataHeader){


    useEffect(()=>{
        if(name && email){

        }
    }, [])

    return (
        <div className="Header">
            <header className="py-4 px-5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-6 text-left">
                            <Logo/>
                        </div>{/* col-6 */}

                        <div className="col-6 text-end">
                            <button className="btn">Login</button>
                            <button className="btn bg-primary text-light">Register</button>
                        </div>{/* col-6 */}

                        <div className="col-6 text-end">
                            <button className="btn btn-create"><span><FontAwesomeIcon icon={faPlus} style={{position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} /></span>Criar atividade</button>
                            <div className="profile">
                                <div className="image"></div>
                                <div className="level">1</div>
                            </div>{/* profile */}
                        </div>{/* col-6 */}

                    </div>{/* row */}
                </div>{/* container */}
            </header>
        </div>
    )
}

export default Header