import React from "react"
import "./index.scss"
import IconLogo from "../../images/logo.svg"
import ImageFooter from "../../images/footer-image.webp"
import ImageApple from "../../images/icons/apple-appstore.svg"
import ImageGoogle from "../../images/icons/google-play.svg"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__text-wrap">
          <div className="footer__logo-wrap">
            <img src={IconLogo} className="footer__logo" />
          </div>
          <div>
            {/* yes, the second title looks like a h1, but it is not a h1, hence I gave it style of h1, while keeping it h3 */}
            <h2 className="h2 margin-0">Exclusive lifestyle offers only for DAMAC Residents.</h2>
            <h3 className="h1 margin-0">DAMAC Residents Offers</h3>
          </div>
          <div className="footer__download-link-wrap">
            <a href="" className="link-app-download" title="download from apple appstore">
              <img src={ImageApple} alt="" />
            </a>
            <a href="" className="link-app-download" title="download from google appstore">
              <img src={ImageGoogle} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__image-wrap">
          <img src={ImageFooter} className="footer__primary-image" alt="Damac living app's offer sections" />
        </div>
      </div>
      <div className="footer__bottom">
        <p className="small">© Copyright 2021. DAMAC Properties. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
