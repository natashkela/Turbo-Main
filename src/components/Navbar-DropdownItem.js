import React from 'react';
import PropTypes from 'prop-types';
const NavbarDropdownItem = ({dropdownMenuItems}) => {
  return(
    <ul className="dropdown-menu">
      {dropdownMenuItems.map((menuItem,index)=>
        <li key={index}><a href={menuItem.href}>{menuItem.name}</a></li>
      )}
    </ul>
  );
}
NavbarDropdownItem.propTypes = {
  dropdownMenuItems: PropTypes.array
}

export default NavbarDropdownItem;
