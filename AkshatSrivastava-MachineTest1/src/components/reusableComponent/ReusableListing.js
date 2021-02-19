import {useState, useEffect} from 'react';
import { fetchPostAPI, fetchUsersAPI } from '../../services/common'
export const ReusableListing = ({component:Component,url}) => {
    const [userindex,setuserIndex] = useState(1);
    const [postindex,setpostIndex] = useState(1);
    const [users,setUsers] = useState([]);
    const [posts,setPosts] = useState([]);
    const userCountFromParent =(count)=>{
        console.log('---------------',count);
        setuserIndex(count)
    }
    const postCountFromParent =(count)=>{
        setpostIndex(count)
    }
        const fetchUser =()=>{
            fetch(fetchUsersAPI.concat(userindex))
            .then(res=>res.json())
            .then(resjson=>setUsers(resjson.data))
        }
        const fetchPosts =()=>{
            fetch(fetchPostAPI.concat(postindex))
            .then(res=>res.json())
            .then(resjson=>setPosts(resjson.data))
        }
    const getData=()=>{
        if(url.toLowerCase().includes('user')){
            fetchUser()
        }else if(url.toLowerCase().includes('posts')){
            fetchPosts()
        }
    }
    useEffect(() => {
        getData();
    }, [users,posts]);
    return (
        <div>
            {users.length>0 && <Component data={users} count={userCountFromParent}/>}
            {posts.length>0 && <Component data={posts} count={postCountFromParent}/>}
        </div>
    )
}