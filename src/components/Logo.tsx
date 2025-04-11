import '../styles/Logo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'

function Logo(){
    return (
        <div className="Logo">
            <div className='logo-image'><span><FontAwesomeIcon icon={faPersonRunning} /></span></div>
            <h1>FITMEET</h1>
        </div>
    )
}

export default Logo