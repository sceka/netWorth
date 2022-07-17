import React from "react";
import "./Sidebar.scss";
const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-title">Net Worth</div>
            <div className="sidebar-wrapper">
                <button>
                    <a href="profile">Profile</a>
                </button>
                <button>
                    <a href="settings">Settings</a>
                </button>
                <button>
                    <a href="profile">Profile</a>
                </button>
                <button>
                    <a href="settings">Settings</a>
                </button>
                <button>
                    <a href="profile">Profile</a>
                </button>
                <button>
                    <a href="settings">Settings</a>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
