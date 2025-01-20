import { useState } from 'react';

import Img from './Img/Mademe.png';
import './App.css';
import Button from './button';
import Discryption from './Description';
import description from './Description/description';
import ImageC1 from './Img/case01.png';
import ImageC2 from './Img/case02.png';
import ImageC3 from './Img/case03.png';
import ImageC4 from './Img/case04.png';




const Images = () =>
  (
    <div>
      <a href='https://Img/Mademe.png'>
          <img src={Img} style={{width:100}}/>
      </a>
   </div>
  );

const OnImage = ({ImageOn}) => 
(
   <img src={ImageOn} style={{width: 200}}/>  
);

const descriptionButton = {
  buttonOnTitle:"Pokaż",
  buttonOffTitle:"Ukryj",
};

function App() {

  const [descriptions, setDescription] = useState("");
  const [descriptionsImg, setDescriptionImg] = useState(false);

  const changeDiscription = (descriptionKey) => {
  setDescription(descriptionKey);   
  }

  const imageEl = {
    first: ImageC1,
    second: ImageC2,
    third: ImageC3,
    fourth: ImageC4,
  }
 
    return (
    <>
    <Images/>
    
      <div></div>
      
      <h1>Vite + React</h1>
      
      <Button onClick = {() => {changeDiscription('first'); setDescriptionImg(false) } } isActive={descriptions === 'first'}>first</Button>
      <Button onClick = {() => {changeDiscription('second'); setDescriptionImg(false)}} isActive={descriptions === 'second'}>second</Button>
      <Button onClick = {() => {changeDiscription('third'); setDescriptionImg(false)}} isActive={descriptions === 'third'}>third</Button>
      <Button onClick = {() => {changeDiscription('fourth'); setDescriptionImg(false)}} isActive={descriptions === 'fourth'}>fourth</Button>
      <div className="card"></div> 
      <div>
        {/* {
          descriptions ? (<Discryption>{description[descriptions]}</Discryption>

          ) : (<p>Zaczynaj klikanie</p>)
        } */}
        {descriptions && <Discryption>{description[descriptions]} 
       

        <p>
          <Button onClick={() => setDescriptionImg(!descriptionsImg)} onActive={descriptionsImg}>
            {descriptionsImg ? descriptionButton.buttonOffTitle : descriptionButton.buttonOnTitle}
          </Button>
        </p>
      
          {descriptionsImg && descriptions && (<OnImage ImageOn={imageEl[descriptions]} />)}
          {!descriptionsImg && <p>Obraz wyłączony</p>}

       </Discryption>}

        </div>













   
        {/* <Button onClick = {() => changeImage(descriptionsImg === ' ' ? null : ' ')}  onActive={descriptionsImg === ' '}>
        {descriptionsImg === ' ' ? descriptionButton.buttonOffTitle : descriptionButton.buttonOnTitle}
        </Button>
          
        {(descriptionsImg && <OnImage/>)}
        {!descriptionsImg && <p></p>}  */}
    </>
  );
};

export default App
