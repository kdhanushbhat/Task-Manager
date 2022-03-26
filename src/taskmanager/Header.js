import React from "react";
import { NavLink } from "react-router-dom";
import { GoChecklist } from "react-icons/go";
function Header() {
  const navLinkStyles = ({isActive}) => {
    return{
      backgroundColor: isActive? 'black' : 'white',
    color: isActive?'white':'black',
    fontWeight: isActive?'bold':'normal',
    borderRadius:'5px',
    }
  }
  return (
    <header>
      <h1 className="app-head">
        Task Manager <GoChecklist className="list-icon" />
      </h1>
      <nav>
        <div className="nav-list">
          <NavLink style={navLinkStyles} className="nav-link" to="/">
            Current Tasks
          </NavLink>
          <NavLink style={navLinkStyles} className="nav-link" to="/add-task">
            Add Task
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
