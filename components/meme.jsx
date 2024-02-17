import React from "react";


export default function Meme() {
  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    imgurl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allmemes,setAllmemes] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllmemes(data.data.memes))
  })
                          //(OR)
                          
//   React.useEffect(() => {
//     async function getMemes() {
//         const res = await fetch("https://api.imgflip.com/get_memes")
//         const data = await res.json()
//         setAllMemes(data.data.memes)
//     }
//     getMemes()
// }, [])

  function getMemeImage() {

    const randomNumber = Math.floor(Math.random() * allmemes.length);
    setmeme((prev) => {
      return {
        ...prev,
        imgurl: allmemes[randomNumber].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(meme);
    setmeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          <button className="form--button" onClick={getMemeImage} type="button">
            Get a new meme image 🖼
          </button>
        </form>

        <div className="meme">
          <img src={meme.imgurl} alt="" className="meme--image" />

          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}
