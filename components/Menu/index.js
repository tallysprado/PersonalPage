import {Button} from '@material-ui/core'
import Image from 'next/image'

const buttons = ['Sobre mim', 'Projetos', 'Contato']

export default function Menu(){

    return(
        <div id='menu'>
            <img
            src='/smiley.png'
            height={150}
            width={150}
            className='image'
            />
            {
                buttons.map((button)=>(
                    <Button 
                    className='button'
                    variant='contained'
                    color='primary'>
                    {button}
                    </Button>
                ))
            }
        </div>
    )
}