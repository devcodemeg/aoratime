import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../../assets/images";

const SideBar = () => {
  const sidebarMenu = [
    {
      name: "Dashboard",
      icon: "fa-sharp fa-thin fa-house",
      link: "/dashboard",
    },
    {
      name: "Administrator",
      icon: "fa-solid fa-gear",
      link: "",
      submenus: [
        {
          name: "Roll",
          link: "/roll",
        },
        {
          name: "Resident management",
          link: "/create-residents",
        },
        {
          name: "Customer & Object",
          link: "/customers",
        },
        {
          name: "Reporting",
          link: "/product/product-list",
        },
        {
          name: "Monitoring",
          link: "/product/product-list",
        },
      ],
    },

     ];

  const location = useLocation();
  const activePath = location.pathname;
  const activeSubMenus = sidebarMenu.findIndex((item) =>
    item.submenus?.some((subMenus) => activePath.startsWith(subMenus.link))
  );

  const [expandSubMenus, setExpandSubMenus] = useState(activeSubMenus);

  const handleToggle = (idx) => {
    setExpandSubMenus((prevExpanded) => (prevExpanded === idx ? null : idx));
  };

  const addClass =() =>{
    document.body.classList.toggle("open-sidebar")
  }

  return (
    <aside className="sidenav">
      <div className="sidebar-top">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div class="navmenu-sidbar">
        <div class="navbar-icon" onClick={addClass}>
                    <span></span>
                </div>
        </div>
      </div>
      <div className="navbar-inner">
        <ul>
          {sidebarMenu.map((menus, idx) => (
            <li
              key={idx}
              className={`menu-item here  ${
                idx === expandSubMenus && menus.submenus ? "menu-accordion" : ""
              }`}
            >

              <Link
                onClick={() => handleToggle(idx)}
                to={!menus.submenus && menus.link}
                className={`menu-link
                ${expandSubMenus === idx ? 'active' : ''}
                ${!menus.submenus && activePath === menus.link ? "active" : ""}

                `}
              >
                <span className="menu-icon">
                  <i class={`${menus.icon}`} aria-hidden="true"></i>
                </span>
                <span className="menu-title">{menus.name}</span>
                {menus.submenus && <span className="menu-arrow"></span>}
              </Link>
              {menus.submenus && (
                <div
                  className={`menu-sub menu-sub-accordion menu-active-bg overflw-hdn ${
                    expandSubMenus === idx ? "max-h-400" : "max-h-0"
                  }`}
                >
                  {menus.submenus &&
                    menus.submenus.map((subMenus, subIdx) => (
                      <div
                        key={subIdx}
                        className={`menu-item`}
                      >
                        <Link className={`menu-link ${
                          activePath === subMenus.link ? "active" : ""
                        }`} to={subMenus.link}>
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">{subMenus.name}</span>
                        </Link>
                      </div>
                    ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
