import React from "react"
import SubHeading from "../SubHeading/SubHeading"
import "./Profile.css"
import images from "../../constants/images"
import ME from "../../assets/profile.png"

const Profile = () => {
  return (
    <div className="app__profile ">
      <div className="profile_items">
        <img src={images.img3} alt="" className="item_image" />
      </div>
    </div>
  )
}

export default Profile
