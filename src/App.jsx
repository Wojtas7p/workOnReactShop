import { useState } from 'react';

import Img from './Img/Mademe.png';
import './App.css';
import Button from './button';
import Discryption from './Description';
import description from './Description/description';
import ImageOn from './Img/Mademe_Widok_Produktu.png';




const Images = () =>
  (
    <div>
      <a href='https://Img/Mademe.png'>
        <img src={Img} style={{width:100}}/>
      </a>
    <h1>Kurs React workOn</h1>
   </div>
  );

const OnImage = () => 
(
  <div>
    <img src={ImageOn} style={{width:200, marginTop:10}}/>
  </div>  
);

const descriptionButton = {
  buttonOnTitle:"Włącz Img",
  buttonOffTitle:"Wyłącz Img",
};


function App() {

  const [descriptions, setDescription] = useState("");
  const [descriptionsImg, setDescriptionImg] = useState(false);



  const changeDiscription = (descriptionKey) => {
  setDescription(descriptionKey);   
  }

  
  const changeImage = (descriptionKey) => {
    setDescriptionImg(descriptionKey);   
    }


    return (
    <>
    <Images/>
    
      <div></div>
      
      <h1>Vite + React</h1>

      <Button onClick = {() => changeDiscription('first')} isActive={descriptions === 'first'}>first</Button>
      <Button onClick = {() => changeDiscription('secend')} isActive={descriptions === 'secend'}>secend</Button>
      <Button onClick = {() => changeDiscription('therd')} isActive={descriptions === 'therd'}>therd</Button>
      <Button onClick = {() => changeDiscription('fort')} isActive={descriptions === 'fort'}>fort</Button>
      <div className="card"></div> 
      <div>
        {/* {
          descriptions ? (<Discryption>{description[descriptions]}</Discryption>

          ) : (<p>Zaczynaj klikanie</p>)
        } */}
        {descriptions && <Discryption>{description[descriptions]}</Discryption>}
        {!descriptions && <p>Zaczynaj klikanie</p>}  

        </div>
   
        <Button onClick = {() => changeImage(descriptionsImg === ' ' ? null : ' ')}  onActive={descriptionsImg === ' '}>
        {descriptionsImg === ' ' ? descriptionButton.buttonOffTitle : descriptionButton.buttonOnTitle}
        </Button>
          
        {(descriptionsImg && <OnImage/>)}
        {!descriptionsImg && <p></p>} 
    </>
  );
};

export default App
