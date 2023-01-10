import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const CardProperty: React.FC = ({ data }) => {
  return (
    <Link
      className="card-property"
      to={data.url}
      title={`Click to see ${data.propId}`}
    >
      {console.log("data", data)}
      <div className="card-property__text-wrap">
        <h3 className="">{data.propId}</h3>
        <small>{data.location}</small>
      </div>
      <img src={data.image} alt="Eid Mubarak" />
    </Link>
  )
}

export default CardProperty
