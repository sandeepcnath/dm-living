import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const CardImageTextHorizontal: React.FC = ({ data }) => {
  return (
    <div className="card-image-text">
      <div className="card-image-text__image-wrap">
        <img
          src={data.image}
          alt=""
          className="card-image-text__image"
        />
      </div>
      <div className="card-image-text__text-wrap">
        <h2>{data.title}</h2>
        <div>
          {data.subtitle ? <p className="h3">{data.subtitle}</p> : ""}
          {data.text ? <p className="small card-image-text__description">{data.text}</p> : ""}
        </div>
        <Link
          className="button card-image-text__link"
          to={data.url}
          title={`Click to ${data.title}`}
        >
          {data.actionText}
        </Link>
      </div>
    </div>
  )
}

export default CardImageTextHorizontal
