import { useState } from "react";
import style from './style.module.scss'
const SubscripeButton = (props) => {
    const [message, handelMessage] = useState(null);
    const printThankMessage = (e) => {
        handelMessage('Thank you for your subscribe!')
    }
    const content = () => {
        return ! message ?  
                        <button onClick={printThankMessage}> Click to do Subscripe</button> :
                        <p>{message}</p>
        
    }
    return <div className={style.style}>{content()}</div>
}

export default SubscripeButton;