import React from "react"
import SubHeading from "../SubHeading/SubHeading"
import "./Profile.css"
import images from "../../constants/images"

const Profile = () => {
  return (
    <div className="app__profile ">
      <div className="profile_items">
        <img src={images.img1} alt="" className="item_image" />
      </div>
    </div>
  )
}

export default Profile
