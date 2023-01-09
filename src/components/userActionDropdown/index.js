import React from "react"
import "./index.scss"

const UserActionDropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown__button dropdown__button_user small">
        JD
      </button>
      <div className="dropdown__options">
        <a href="#">Dashboard</a>
        <a href="#">Setting</a>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}

export default UserActionDropdown
