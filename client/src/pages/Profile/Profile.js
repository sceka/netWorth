import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.scss";
const Profile = () => {
    return (
        <div className="profile-container">
            <Sidebar />
            <div className="profile-info">
                <div className="profile-name">Marko Scekic</div>
                <div className="profile-info-wrapper">
                    <div className="profile-age">Age: 20</div>
                    <div className="profile-country">Country: Montenegro</div>
                    <div className="profile-country">
                        Country Average Income: *** euro
                    </div>
                    <div className="profile-country">My Income: **** euro</div>
                    <div className="profile-country">Diploma: High School</div>
                    <div className="profile-country">
                        Work: Full Stack Developer
                    </div>
                </div>
            </div>
            <div>Name</div>
        </div>
    );
};

export default Profile;
