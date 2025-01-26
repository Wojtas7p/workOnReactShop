import { useState } from 'react';

import Img from './Img/Mademe.png';
import './App.css';
import Button from './button';
import Discryption from './Description';
import description from './Description/description';


const Images = () =>
  (
    <div>
      <a href='https://Img/Mademe.png'>
          <img src={Img} style={{width:100}}/>
      </a>
   </div>
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
  setDescriptionImg(false)
  }

    return (
    <>
    <Images/>
    
      <div></div>
      
      <h1>Vite + React</h1>
      
      <Button onClick = {() => changeDiscription('first')} isActive={descriptions === 'first'}>first</Button>
      <Button onClick = {() => changeDiscription('second')} isActive={descriptions === 'second'}>second</Button>
      <Button onClick = {() => changeDiscription('third')} isActive={descriptions === 'third'}>third</Button>
      <Button onClick = {() => changeDiscription('fourth')} isActive={descriptions === 'fourth'}>fourth</Button>
      <div className="card"></div> 
      <div>
        {/* {
          descriptions ? (<Discryption>{description[descriptions]}</Discryption>

          ) : (<p>Zaczynaj klikanie</p>)
        } */}
        {descriptions && (<Discryption>{description[descriptions].text} 

        <p>
          <Button onClick={() => setDescriptionImg(!descriptionsImg)} onActive={descriptionsImg}>
            {descriptionsImg ? descriptionButton.buttonOffTitle : descriptionButton.buttonOnTitle}
          </Button>
        </p>
      
          {descriptionsImg && descriptions && (<Discryption imgEl={description[descriptions].imgEl} />)}
          {!descriptionsImg && <p>Obraz wyłączony</p>}

       </Discryption>
      )}

       
        </div>

   </>
  );
};

export default App
