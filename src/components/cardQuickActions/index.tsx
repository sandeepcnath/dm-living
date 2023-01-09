import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const CardQuickActions: React.FC = ({ data }) => {
  return (
    <Link
      className="card-quick-actions"
      to={data.url}
      title={`Click to go to ${data.title}`}
    >
      <img
        src={data.image}
        alt=""
        className="card-quick-actions__image"
      />
      {data.title}
    </Link>
  )
}

export default CardQuickActions
