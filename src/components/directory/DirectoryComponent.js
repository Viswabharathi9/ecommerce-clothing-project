import React from 'react';
import MenuItemsComponent from '../menu-items/MenuItemsComponent';

import './directory.styles.scss'


class DirectoryComponent extends React.Component{

    constructor(){
        super();

this.state ={
                sections: [{
                    title: "Hats",
                    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
                    id:1,
                    linkUrl: "hats"
                },

                {
                    title: "Jackets",
                    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
                    id:2,
                    linkUrl: "jackets"
                },

                {
                    title: "Sneakers",
                    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
                    id:3,
                    linkUrl: "sneakers"  
                },

                {
                    title: "Women's",
                    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
                    id:4,
                    size :'large',
                    linkUrl: "womens"
                },

                {
                    title: "Mens",
                    imageURL : "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg",
                    id:5,
                    size :'large',
                    linkUrl: "mens"
                }

                ]
}
    }

    render(){
        return (
            <div className='directory-menu'>
{
                this.state.sections.map( ({id, ...otherSectionsProps}) => (
                  ///  <MenuItems key={section.id} title={section.title} imageURL={section.imageURL} />  //destructure the id title utl
                  
                  <MenuItemsComponent key={id} {...otherSectionsProps} />
                  ))
    }



            </div>

 

        )
    }


}

export default DirectoryComponent;