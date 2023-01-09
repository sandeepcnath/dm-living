import { Link } from "gatsby"
import React, { useState } from "react"
import IconLogo from "../../images/logo.svg"
import "./index.scss"

const Header = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible)
  }

  return (
    <header>
      <a href="#main" className="sr-only message-main-content">
        Skip to content
      </a>
      <nav className="nav">
        <div className="nav__inner-wrap">
          <Link
            className="nav__primary-link"
            to="/"
            title="Damac Living Home"
          >
            <img src={IconLogo} />
          </Link>
          <button
            className="button button_menu"
            onClick={toggleMenuVisibility}
          >
            MENU
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
