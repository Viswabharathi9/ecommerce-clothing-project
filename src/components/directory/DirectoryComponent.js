import React from 'react';
import CategoryItem from '../category-items/Category-items-component';

import './directory.styles.scss'


const DirectoryComponent = ( {categories} ) =>{
       
    return (
            <div className='directory-container'> 
    { categories.map( (category) => ( 
       <CategoryItem key={category.id} category={category} imageURL={category.imageURL}/>
          
    ))}

</div>
);

 

        
    }




export default DirectoryComponent;