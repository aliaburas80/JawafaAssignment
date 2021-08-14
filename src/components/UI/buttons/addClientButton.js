import { PLUS } from '../../constants'
import style from './buttons.module.scss'
const AddClientButton = (props) =>{

    return(
        <div onClick={props.clickHandler}  className={style.client}>
            <span>{props.buttonTitle}</span>
            <span> {PLUS} </span>
        </div>
    )

}
export default AddClientButton