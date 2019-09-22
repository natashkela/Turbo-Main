import React from 'react';
import NavbarDropdownItem from './Navbar-DropdownItem.js';
import PropTypes from 'prop-types';
const NavbarItem = ({mainMenuItem}) => {
  let mainMenu = mainMenuItem.mainMenuItem;
  let dropdownMenuItems = mainMenuItem.dropdownMenuItems;
  if(dropdownMenuItems.length>0){
    return (
      <li className="dropdown">
        <a href={mainMenu.href} className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                       aria-haspopup="true" aria-expanded="false">{mainMenu.name} <span className="ion-chevron-down"></span></a>
        <NavbarDropdownItem dropdownMenuItems={dropdownMenuItems} />
      </li>
    );
  }
  else{
    return (
      <li className="dropdown">
        <a href={mainMenu.href}>{mainMenu.name}</a>
      </li>
    );
  }
}
NavbarItem.propTypes = {
  mainMenuItem:PropTypes.object
}
export default NavbarItem;
