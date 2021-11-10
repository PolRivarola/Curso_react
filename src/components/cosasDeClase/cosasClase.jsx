

const App = () => {

    const[number,setNumber] = useState(0)
    const onClick = ()=>{
      setNumber(number + 1)
    }
    return(
      <Fragment>
        <h3>{`Boton tiene el numero ${number}`}</h3>
        <button onClick={onClick}>{number}</button>
      </Fragment> 
    )
  }
  