import React from 'react';
import './style.css';
import classnames from 'classnames';
const Category = ({title, onClick, selected}) => {

	return <li className={classnames('category', {selected})} onClick={onClick}>{title}</li>
}

export default Category;