import React,{useState,useEffect} from 'react'
import "./write.css"
import axios from 'axios';

export default function Write() {
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [desc,setDesc]=useState("");
    const [file,setFile]=useState(null);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const newPost={title,desc,author};
        if(file){
            const data=new FormData();
            const filename=Date.now()+"-"+file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo=filename;
            try {
                await axios.post("/upload",data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const res=await axios.post("/posts",newPost);
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <div className="write">
        {file && (
            <img 
                className='writeImg'
                src={URL.createObjectURL(file)}
                alt="" 
            />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                <input type="text"  placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
                <input type="text"  placeholder='Author' className='writeAuthor' onChange={e=>setAuthor(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your Story...' type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>

            </div>
            <button className='writeSubmit' type="submit">Publish</button>
        </form>
    </div>
  )
}
