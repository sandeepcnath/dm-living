import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const CardIconText: React.FC = ({ data }) => {
  return (
    <div className="card-icon-text">
      <div className="card-icon-text__inner-wrap">
        <div className={`card-icon-text__image-wrap icon-${data.image}`}></div>
        <h2>{data.title}</h2>
        <p className="small card-icon-text__description">{data.text}</p>
      </div>
      {data.actionText ?
        <Link
          className="button card-icon-text__link"
          to={data.url}
          title={`Click to ${data.title}`}
        >
          {data.actionText}
        </Link>
        :
        <ul className="socialmedia-list">
          <li>
            <a href="#" title="visit our facebook page" className="button button_icon-sm icon-facebook"></a>
          </li>
          <li>
            <a href="#" title="visit our instagram page" className="button button_icon-sm icon-instagram"></a>
          </li>
          <li>
            <a href="#" title="visit our linkedin page" className="button button_icon-sm icon-linkedin"></a>
          </li>
          <li>
            <a href="#" title="visit our twitter page" className="button button_icon-sm icon-twitter"></a>
          </li>
          <li>
            <a href="#" title="visit our youtube page" className="button button_icon-sm icon-youtube"></a>
          </li>
        </ul>
      }
    </div>
  )
}

export default CardIconText
