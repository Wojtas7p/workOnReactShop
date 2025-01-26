const Discription = ({children, imgEl}) =>{
    return(

    <div>
         <p>{children}</p>
          {imgEl && <img src={imgEl} alt="Description image"/>}
    </div>
      
    );
} 


export default Discription;