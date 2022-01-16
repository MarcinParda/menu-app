import React from 'react';
import MenuItem from "components/MenuItem";
import {DishData} from "interfaces/globalInterfaces";

interface Props {
    menuItems: DishData[];
}

const Menu: React.FC<Props> = ({menuItems}) => {

  return (
      <div className="menu">
          {menuItems.map(menuItem => (
              <MenuItem key={menuItem.id} dishData={menuItem} />
          ))}
      </div>
  );
}

export default Menu;
