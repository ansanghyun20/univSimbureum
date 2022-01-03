import SelectCategory from '../../screens/WritePost/SelectCategory';
import React, { useState, useEffect } from 'react';

export default WritePostAction = (props) => {
    const [categoryItem, setCategoryItem] = useState('');
    const [priceItem, setPriceItem] = useState('');


    const setCategory = (category) => {
        props.navigation.navigate('InputPrice', {category: category,})
    }

    const setPrice = (category, price) => {
       
    }
    
    return <SelectCategory setCategory={setCategory} navi={props.navigation}/> 
    
    
   
    
}