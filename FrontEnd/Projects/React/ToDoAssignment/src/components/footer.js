import React from 'react';
import FilterLink from '../containers/filterlink.js';
import StartOver from '../containers/startover.js';


const Footer = () => (
  <div>
    <p className="footer">
      
      <FilterLink filter="SHOW_ALL" className="filter-link">
        All
      </FilterLink>
      {'   '}
      <FilterLink filter="SHOW_ACTIVE" className="filter-link">
         Active
      </FilterLink>
      {'   '}
      <FilterLink filter="SHOW_COMPLETED" className="filter-link">
        Completed
      </FilterLink>
      {'   '}
      <StartOver />
    </p>
    </div>
);

export default Footer;
