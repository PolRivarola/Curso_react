import Input from "../../components/Input/input"

const Login = () =>{
    return(
        <section className="login-wrap">
            <form className="input-container">
                <h1>Customer login</h1>
                <Input queTipo='text' queDigo='soy el email'/>
                <Input queTipo='password' queDigo='soy el password'/>
                <button type="submit"> </button>
            </form>
        </section>
    )
}

export default Login