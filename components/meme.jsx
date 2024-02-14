import React from "react";
import memesData from "../data/memeData";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("");

  // function getMemeImage() {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   setMemeImage(memesArray[randomNumber].url);
   
  // }
const [meme,setmeme] = React.useState({
  uptext:"",
  bottomtext:"",
  imgurl:"",
})


  function getMemeImage(){
   const memesArray = memesData.data.memes;
   const randomNumber = Math.floor(Math.random() * memesArray.length);
      setmeme(prev=>{
        return{
          ...prev,
          imgurl:memesArray[randomNumber].url
        }
      })
  }

  
  return (
    <>
      <main>
        <form className="form">
          <div>
            <label className="form--label">Top text</label>
            <input type="text" className="form--input" placeholder="top Text" />
          </div>

          <div>
            <label className="form--label">Bottom text</label>
            <input
              type="text"
              className="form--input"
              placeholder="Bottom Text"
            />
          </div>
          <button className="form--button" onClick={getMemeImage} type="button">
            Get a new meme image 🖼
          </button>
        </form>
        <div className="meme"> 
          <img src={meme.imgurl} className="meme--image" />
          <h2 className="--top-text top">Top text</h2>
          <h2 className="--bottom-text bottom">Bottom text</h2>
        </div>
       
      </main>
    
      
    </>
  );
}
