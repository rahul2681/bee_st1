import React,{useState,useEffect} from 'react'
import "./home.css"
import Post from "../../components/post/post";
import axios from "axios";

export default function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async ()=>{
      const res=await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts();
  },[]);
  return (
    <div className='home'>
      {posts.map(p=>(
        <Post post={p} key={p._id}/>
      ))}
    </div>
  )
}
