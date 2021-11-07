import './button.css'

const Button = (props) =>{

    return(
        <section className="button-wrap">
            <button className="btnGeneric">{props.txt}</button>
        </section>
    )
}

export default Button