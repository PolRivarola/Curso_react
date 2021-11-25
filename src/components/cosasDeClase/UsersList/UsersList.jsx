import { Link } from "react-router-dom"

export const UsersList = ({users, setCurrenUser})=>{
    return(
        <div>
        {
            users.map((user)=>{
                const {first,last}= user.name
                const {username} = user.login
                return(
                    <Link to={`/profile/${username}`} onClick={()=>setCurrenUser(user)}>
                        <h1>{first} {last}</h1>
                    </Link>    
                )
                
            })
        }
        </div>
    )
    

}

