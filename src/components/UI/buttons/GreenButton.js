import style from './buttons.module.scss'

const GreenButton = (props)=>{

    return(
        <div onClick={props.clickHandler} className={style.greenButton}>
        <span>{props.buttonTitle}</span>
    </div>
    )
}

export default GreenButton;