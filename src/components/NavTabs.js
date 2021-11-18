import React from "react";

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <ul className="nav nav-pills nav-fill">
      {tabs.map((tab) => (
        //make sure you have the key name here!!!
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab
                ? "nav-link active light-txt nv-lnk-txt"
                : "nav-link light-txt nv-lnk-txt"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
