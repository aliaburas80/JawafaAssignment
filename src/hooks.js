import {useEffect, useState} from 'react'

const UsingHooks = (props) => {

    const [funState, updateFunState] = useState(5)

    const update = () => {
        updateFunState(funState * 2) 
    }

    const killMe = () => {
        props.killMe()
    }

    useEffect(()=>{
        if(funState >=  10){
            console.log('funState: ', funState);
        }
        
    },[funState])

    useEffect(()=>{
        return ()=> {
            updateFunState(0);
            console.log('Killing funState: ', funState);
        }
    },[])
    

    return(
        <div>
            <p>Ali Abu Ras</p>
            <p>{funState}</p>
            <button onClick={update}>Click</button>
            <button onClick={killMe}>Kill me</button>
        </div>
    )


}

export default UsingHooks;