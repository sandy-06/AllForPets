import React from "react";

const ProductList = ({ category }) => {
    

    const[photosFrontPage] = ([
      {
        name: 'dogandcateating',
        category: 'frontpage',
        image: src="../../assets/images/frontPage/dogandcateating.png"
      },
      {
        name: 'petgear',
        category: 'frontpage',
        image: src='../../assets/images/frontPage/petgear.png',
      },
      {
          name: 'pettoys',
          category: 'frontpage',
          image: src='../../assets/images/frontpage/pettoys.png'
      },
      {
          name: 'animal health',
          category: 'frontpage',
          image: src='../../assets/images/frontpage/animalhealth.png'
      }  
    ])
}




export default ProductList;