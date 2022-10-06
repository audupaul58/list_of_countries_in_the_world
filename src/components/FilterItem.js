import React from 'react'

const FilterItem = (item, value, direction) => {
    if(direction === 'asc') return [...item].sort((a, b) => a[value] > b[value] ? 1 : -1);
    if(direction === 'dsc') return [...item].sort((a, b) => a[value] > b[value] ? -1 : 1);
    
    return item
}

export default FilterItem