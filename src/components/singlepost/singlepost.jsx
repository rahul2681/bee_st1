import {useEffect,useState} from 'react'
import "./singlepost.css"
import {useLocation} from "react-router-dom";
import axios from 'axios';

export default function SinglePost() {
    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const [post,setPost]=useState({});
    useEffect(()=>{
        const getPost= async ()=>{
            const res= await axios.get("/posts/"+path);
            setPost(res.data);
        }
        getPost();
    },[path]);
    let imgurl="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";
    if(post.photo){
        const PF="http://localhost:5000/imgs/";
        imgurl=PF+post.photo
    }
    return (
    <div className='singlepost'>
      <div className="singlepostWrapper">
        <img 
          src={imgurl} 
          alt="" 
          className="singlepostImg" 
        />
        <h1 className="singleposttitle">
            {post.title}
          <div className="singlepostedit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlepostauthor'>Author: <b>{post.author}</b></span>
          <span className='singlepostdate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlepostdesc'>
            {post.desc}
        </p>
      </div>
    </div>
  )
}
