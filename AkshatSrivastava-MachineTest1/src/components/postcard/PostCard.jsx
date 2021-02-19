import './PostCard.css'
import { useState } from 'react'
const PostCard = (props) => {
    const posts = props.data
    const [page,setPage] = useState(2)
    const handleClick = ()=>{
        setPage(1+page)
        props.count(page)
    }
    return ( 
        <div>
        <h1 style={{textAlign:'center'}}>Our <span style={{color:'blue'}}>Posts</span></h1>
        <div className="row">
        {posts.map(data=>(
            <div className="col-md-4 post" key={data.id}>
                <div>
                    <h5 style={{textAlign:'center'}}>{data.title}</h5>
                    <p>{data.body}</p>
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
 
export default PostCard;