import React from "react";


/* It takes a prop called selectFilter as input.
The component renders a <select> element with multiple <option> elements inside. 
When the user selects an option, the selectFilter function (provided as a prop) 
will be called with the selected value as an argument.*/
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