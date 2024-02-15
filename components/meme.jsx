import React from "react";
import memesData from "../data/memeData";

export default function Meme() {
 
const [meme,setmeme] = React.useState({
  topText:"",
  bottomText:"",
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

  function handleChange(event){

    const {name,value} = event.target
    console.log(meme);
    setmeme(prevData=>({

      ...prevData,
        [name]:value

    }))
  }
  
  return (
    <>
      <main>
        <form className="form">
          <div>
            <label className="form--label">Top text</label>
            <input 
              type="text"
              className="form--input"
              placeholder="top Text" 
              value={meme.topText}
              name="topText"
              onChange={handleChange}
              />

          </div>

          <div>
            <label className="form--label">Bottom text</label>
            <input
              type="text"
              className="form--input"
              placeholder="Bottom Text"
              value={meme.bottomText}
              name="bottomText"
              onChange={handleChange}

            />
          </div>
          <button 
          className="form--button" 
          onClick={getMemeImage} 
          type="button">
            Get a new meme image 🖼
          </button>
          
        </form>

        <div className="meme"> 
        <img src={meme.imgurl} alt="" className="meme--image"/>
          
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

      </main>
        
    
      
    </>
  );
}
