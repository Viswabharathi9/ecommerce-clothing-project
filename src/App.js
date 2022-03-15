
//import './pages/homepage1/homePage.styles.scss';
import React from 'react';
import './categories.style.scss'
import DirectoryComponent from './components/directory/DirectoryComponent';
//import Category from './components/category-items/Category-items-component';
//import HomepageComponent from './pages/homepage1/HomepageComponent';
//import { Route, Switch, Link } from 'react-router-dom';


function App() {
  
  const categories =[{
    title: "Hats",
    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
    id:1,
  
},

{
    title: "Jackets",
    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
    id:2,
    
},

{
    title: "Sneakers",
    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
    id:3,
    //linkUrl: "sneakers"  
},

{
    title: "Women's",
    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
    id:4,
    //size :'large',
    //linkUrl: "womens"
},

{
    title: "Mens",
    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
    id:5,
    //size :'large',
    //linkUrl: "mens"
}

]

return (
 
      <DirectoryComponent categories={categories} />


);

    }


export default App;
