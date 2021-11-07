import './index.css'

const Input = (props) =>{
    return(
        <input className='inputStyles' type={props.queTipo} placeholder={props.queDigo} />
    )
}

export default Input