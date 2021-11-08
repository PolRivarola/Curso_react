import './button.css'

const Button = (props) =>{

    return(
        <section className="button-wrap">
            <button className={props.styleBtn}>{props.txt}</button>
        </section>
    )
}

export default Button