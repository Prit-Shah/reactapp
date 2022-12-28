import React, { useState, useEffect } from "react";
import axios from "axios";
import {LinearProgress,Typography} from '@mui/joy';
function Animes() {
  const [img, setimg] = useState("");
  const [count, setcount] = useState(0);
  function* generaterandom(count) {
    while (true) {
      yield Math.floor(Math.random() * count);
    }
  }  
  useEffect(() => {  
    const getcount = setInterval(async() => {
        if(count==5){
            let data = await axios.get(
                `https://api.jikan.moe/v4/characters/${randomid.next().value}`
              );
              console.log(data.data.data);
              if (data.data.data.images.jpg.image_url)
                setimageurl(data.data.data.images.jpg.image_url);
        } 
             
      setcount(count + 1)
      if(count>5) setcount(0); 
    }, 500);

   return ()=> {clearInterval(getcount);
        
    if (count == 5) setcount(0)};
  }, [img, count]);

  const setimageurl = (data) => {
    try {
      setimg(data);
    } catch (e) {
      console.error(e);
    }
  };

  const totalchars = 1000;
  let randomid = generaterandom(totalchars);
  return (
    <div className="container">
        <div style={{width:'225px',marginTop:'20px',marginBottom:'30px'}}>
        <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="lg"
      thickness={32}
      value={(count*20)}
      sx={{
        '--LinearProgress-radius': '0px',
        '--LinearProgress-progressThickness': '24px',
        boxShadow: 'sm',
        borderColor: 'neutral.500',
      }}
    >
      <Typography
        level="body3"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
      >
        LOADING… {`${Math.round(count*20)}%`}
      </Typography>
    </LinearProgress></div>
      {/* <h4>{count}</h4> */}
      {/* <button onClick={()=>{start();console.log("starting interval")}}>start</button><br></br> */}
      {/* <button onClick={()=>{stop();console.log("stopping interval")}}>Stop</button><br></br> */}
      <img src={img}></img>
    </div>
  );
}

export default Animes;
