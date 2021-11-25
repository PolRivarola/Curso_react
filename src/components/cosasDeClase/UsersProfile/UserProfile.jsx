export const UserProfile=({currentUser})=>{
    const {first, last} = currentUser.name
    return(
        <>
        <h1>Hola soy {first} {last}</h1>
        </>
    )

}