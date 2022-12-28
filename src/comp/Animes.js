import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Animes() {    
    const [img, setimg] = useState('');
    function* generaterandom(count){
        while(true){
            yield Math.floor(Math.random() * count);
        }    
    }  
    let newimage="";
    const getdata=async()=>{
        let data =await axios.get(`https://api.jikan.moe/v4/characters/${randomid.next().value}`)            
        return data.data.data;
    }  
    useEffect(()=>{
        let getimage=setTimeout(()=>{

        },2000)
        return()=>clearTimeout(getimage);
    })
    const start=()=>{
        newimage = setInterval(async()=>{
            let data =await getdata();      
            console.log(data);            
            setimageurl(data.images.jpg.image_url)
        },10000) 
    }
    
    const setimageurl=(data)=>{
        try{
            setimg(data)
        }
        catch(e){
            console.error(e);
        }
       
    }  
    const stop=()=>{
        clearInterval(newimage);
    }
    const totalchars=1000;
    let randomid=generaterandom(totalchars);    
    return (
        <div>
             <button onClick={()=>{start();console.log("starting interval")}}>start</button><br></br>
            <button onClick={()=>{stop();console.log("stopping interval")}}>Stop</button><br></br>
            <img src={img}></img>
        </div>
    )
}

export default Animes
