import SelectCategory from '../../screens/WritePost/SelectCategory';
import InputPrice from '../../screens/WritePost/InputPrice';
import React, { useState } from 'react';

export default WritePostAction = (props) => {
    const [categoryItem, setCategoryItem] = useState('');
    const [price, setPrice] = useState('');

    const setCategory = (category) => {
        props.navigation.navigate('InputPrice', {category: category,})
    }
    
    return <SelectCategory setCategory={setCategory} navi={props.navigation}/> 
    
    
   
    
}