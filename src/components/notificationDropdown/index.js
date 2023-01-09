import React from "react"
import IconNotification from "../../images/icons/notification.svg"
import "./index.scss"

const NotificationDropdown = () => {
  return (
    <div className="dropdown notification-dropdown">
      <button className="dropdown__button notification-dropdown__button notification-dropdown__button_unread">
        <img src={IconNotification} />
      </button>
      <div className="dropdown__options">
        <a href="#">Dashboard</a>
        <a href="#">Setting</a>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}

export default NotificationDropdown
