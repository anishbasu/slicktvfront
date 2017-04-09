import React from 'react';
import Category from './Category';
import './style.css';

const Categories = ({categories, handleSelect, selectedCategory}) => {
	return <ul className="categories">
			{
				categories.map(
					(title, idx) => 
					<Category title={title} onClick={e => handleSelect(title)} key={idx} selected={title === selectedCategory}/>
				)
			}
		   </ul>
}


export default Categories;