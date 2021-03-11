import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
export default function DownButton(){

    return(
        <div id='downButton'>
            <FontAwesomeIcon
                icon={faAngleDown}
                color='white'
                size='2x'
            />
        </div>
    )
}