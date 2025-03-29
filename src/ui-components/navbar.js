import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import CSS file for styles

const Menu = () => {
  const menuItems = [
    { name: "Home", link: "#0" },
    { name: "About", link: "#0" },
    {
      name: "Widgets",
      link: "#0",
      subMenu: [
        { name: "Big Widgets", link: "#0" },
        { name: "Bigger Widgets", link: "#0" },
        { name: "Huge Widgets", link: "#0" },
      ],
    },
    {
      name: "Kabobs",
      link: "#0",
      subMenu: [
        { name: "Shishkabobs", link: "#0" },
        { name: "BBQ kabobs", link: "#0" },
        { name: "Summer kabobs", link: "#0" },
      ],
    },
    { name: "Contact", link: "#0" },
  ];

  return (
    <nav className="menu">
      <ol>
        {menuItems.map((item, index) => (
          <li className="menu-item" key={index}>
            <a href={item.link}>{item.name}</a>
            {item.subMenu && (
              <ol className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li className="menu-item" key={subIndex}>
                    <a href={subItem.link}>{subItem.name}</a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Menu;
