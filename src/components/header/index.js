import { Link } from "gatsby"
import React from "react"
import NotificationDropdown from "../notificationDropdown";
import UserActionDropdown from "../userActionDropdown";
import IconLogo from "../../images/logo.svg"
import "./index.scss"

const Header = () => {
  return (
    <header className="header">
      <a href="#main" className="sr-only message-main-content">
        Skip to content
      </a>
      <nav className="nav">
        <div className="nav__inner-wrap">
          <div className="nav__logo-wrap">
            <Link
              className="nav__logo-link"
              to="/"
              title="Damac Living Home"
            >
              <img src={IconLogo} className="nav__logo-icon" />
            </Link>
          </div>
          <ul className="nav__action-list">
            <li className="">
              <NotificationDropdown />
            </li>
            <li>
              <UserActionDropdown />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
