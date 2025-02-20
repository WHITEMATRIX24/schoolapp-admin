import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import "./sidebar.css";

const Sidebar = () => {
  const menus = [
    { title: "Home", nav: "home", icon: <LuLayoutDashboard /> },
    { title: "Profile", nav: "profile", icon: <BsPersonCircle /> },
    {
      title: "Acedemics",
      nav: "acedemics",
      icon: <HiOutlineAcademicCap />,
      subMenus: [
        { title: "Time Table" },
        { title: "Assignment" },
        { title: "Exams" },
      ],
    },
  ];

  return (
    <div className="sidebar-container">
      {/* header */}
      <div className="sidebar-top-content-wrapper">
        <div className="sidebar-header-container">
          <div className="sidebar-profile-wrapper">
            <div className="sidebar-profile-img-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XRJsqWeSO32GxvCX2YA8uHaE2ipwmfq4RI0RT6YThfqT7irfRNgwnHGdXRFjGXAGIV0-oOrVDjmWj7TkZPGUgCvV9wBUa0P~gTMHYev9O~I~8Wc~tCdeFGimkCZDwXhYF8FrWXy8A0kvtSgjp2NzLnjCeHoRPEOfFWzHmztFlwglUOlqHE2wzPr-6q61PvDAYlS5FoPYpyi38YFJw0OfN8ysScYfxylyCObWp-lppSEkHWBNkDG8Eu1p6sP3BpQD5d~Te17yLYlZVjIW8vhQVb3ThDjtYM2P76CRBkw-EDXwgTVYg7Jo61NU2YWAI1qsoQhZTAdsgs1OIMLXK40s4w__"
                alt="profile"
              />
            </div>
            <div className="sidebar-profile-content-container">
              <h6>Profile Name</h6>
              <p>email address</p>
            </div>
          </div>
          <div className="sidebar-search-container">
            <input type="text" placeholder="search" />
            <span>
              <CiSearch />
            </span>
          </div>
        </div>
        {/* menus */}
        <div className="sidebar-menu-container">
          {menus.map((menu, index) => (
            <div key={index} className="sidebar-menu">
              <span>{menu.icon}</span>
              <p>{menu.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* footer */}
      <div className="sidebar-footer-container">
        <div className="sidebar-menu">
          <span>
            <IoLogOutOutline />
          </span>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
