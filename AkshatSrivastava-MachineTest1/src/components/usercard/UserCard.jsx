import { useState } from 'react'
import './UserCard.css'
const UserCard = (props) => {
    const users = props.data
    const [page,setPage] = useState(2)
    const handleClick = ()=>{
        setPage(1+page)
        props.count(page)
    }
    return ( 
        <div>
        <h1 style={{textAlign:'center'}}>Our <span style={{color:'blue'}}>Users</span></h1>
        <div className="row">
        {users.map(data=>(
            <div className="col-md-4 user"key={data.id}>
                <div>
                    <div><span className="bold">Name:</span>{data.name}</div>
                    <div><span className="bold">Email:</span>{data.email}</div>
                    <div><span className="bold">Gender:</span>{data.gender}</div>
                </div>
            </div>
        ))}
        </div>
        <div className="center">
            <button className="button" onClick={handleClick}>Load More</button>
            </div> 
        </div>
     );
}
 
export default UserCard;