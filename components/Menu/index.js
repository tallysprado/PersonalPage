import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const buttons = ['Sobre mim', 'Projetos', 'Contato']
const icons = [faWhatsapp, faGithub, faLinkedin]

export default function Menu() {

    return (
        <div id='menu'>
            <div className='presentation'>
                <img
                    src='/perfil.jpeg'
                    height={150}
                    width={150}
                    className='image'
                />
                <h1>Tallys Cordeiro Prado</h1>
                <p><i>Coding made simple.</i></p>
            </div>
            
            <div className='buttons'>
                {
                    buttons.map((button) => (
                        <button>
                            {button}
                        </button>
                    ))
                }
            </div>

            <div className='links'>
                {icons.map(((icon) => (
                    <FontAwesomeIcon
                        size='2x'
                        color='#f2a365'
                        className='icon'
                        icon={icon} />
                )))}
            </div>
        </div>
    )
}