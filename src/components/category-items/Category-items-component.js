import './category-items.style.scss'


const CategoryItem =({ title,id, imageURL}) => {
      
return(

    
    <div  className='category-container'>
          <div className='background-image' 
          style={{
            backgroundImage: `url(${imageURL})`,
          } }
          />
          <div className='categories-body-container'>  
          
          <h2>{title}</h2>
          <p>SHOP NOW</p>
          </div>
        </div>
    

);



}

export default CategoryItem;