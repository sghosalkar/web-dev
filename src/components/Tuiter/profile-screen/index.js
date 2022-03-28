import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import './index.css';

const ProfileScreen = () => {
  const profile = useSelector(state => state.profile);
  const navigate = useNavigate();

  return(
    <div>
      <div className="d-flex align-items-center mt-2">
        <div className="ms-2">
          <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)} />
        </div>
        <div className="ms-4">
          <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
          <h6 className="text-secondary">{profile.tuitCount} Tuits</h6>
        </div>
      </div>
      <div className="mt-2"><img src={profile.bannerPicture} alt="" className="img-fluid"/></div>
      <div className="d-flex justify-content-between">
        <img src={profile.profilePicture} alt="" className="img-fluid wd-profile-picture"/>
        <Link to="/tuiter/edit-profile" className="btn btn-outline-dark text-white rounded-pill h-25 m-2">Edit Profile</Link>
      </div>
      <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
      <h6 className="text-secondary">@{profile.handle}</h6>
      <h6 className="mt-3 text-white">{profile.bio}</h6>
      <div className="d-flex text-secondary mt-3">
        <span className="me-3"><i className="fa fa-location-dot"/> {profile.location}</span>
        <span className="me-3">
          <i className="fa fa-cake-candles"/> Born {new Date(profile.dateOfBirth).toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric"})}
        </span>
        <span className="me-3">
          <i className="fa fa-calendar-days"/> Joined {new Date(profile.dateJoined).toLocaleString("en-US", {year: "numeric", month: "long"})}
        </span>
      </div>
      <div className="d-flex mt-2">
        <div className="me-3 text-white fw-bold">{profile.followingCount} <span className="text-secondary"> Following</span></div>
        <div className="me-3 text-white fw-bold">{profile.followersCount} <span className="text-secondary"> Followers</span></div>
      </div>
      <div className="mt-2"><a href={profile.website}>{profile.website}</a></div>
    </div>
  );
};

export default ProfileScreen;
