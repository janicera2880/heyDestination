import React from "react";

function FilterCategory({selectFilter}) {
  return (    
    <div className="filter">
     
      <select name="filter" onChange={selectFilter} >
        <option className="option-filter" value="All">All Categories</option>
        <option className="option-filter" value={'Sports'}>Sports</option>
        <option className="option-filter" value={'Lifestyle'}>Lifestyle</option>
        <option className="option-filter" value={'Events'}>Events</option>
        <option className="option-filter" value={'Unique'}>Unique</option>
      </select>
    </div>
);
}

export default FilterCategory;