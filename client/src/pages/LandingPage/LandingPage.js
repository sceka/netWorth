import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./LandingPage.scss";
const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div>
                <Sidebar />
            </div>
            <div>Hello</div>
        </div>
    );
};

export default LandingPage;
