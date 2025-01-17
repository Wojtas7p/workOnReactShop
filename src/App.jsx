import { useState } from 'react';

import Img from './Img/Mademe.png';
import './App.css';
import Button from './button';
import Discryption from './Description'
import description from './Description/description';




const Images = () =>
  (
      <div>
    
        <a href='https://Img/Mademe.png'>
        <img src={Img} style={{width:100}}/>
      </a>
    <h1>Kurs React workOn</h1>
   </div>
  );



function App() {

  const [descriptions, setDescription] = useState("");





  const changeDiscription = (descriptionKey) => {
  setDescription(descriptionKey);   
  }
    return (
    <>
    <Images/>
    
      <div></div>
      
      <Button onClick = {() => changeDiscription('first')} isActive={descriptions === 'first'}>Włącz/Wyłącz</Button>
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
        <p>jniech pokazuje i zamyka zdjęcie</p>
          
    </>
  );
};

export default App
