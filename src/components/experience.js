import React from "react";

const experience = ({props}) => {
  return (
    <div>
      <img
        src={props.image}
        className="img-circle img-thumbnail pull-right hidden-xs icon"
        alt={props.company}
      />
      <h3>
      {props.company}
        <br />
        <small>{props.jobTitle}</small>
      </h3>
      <p>
        <span className="badge">{props.dates}</span>
      </p>
      <div>
        {props.companyDesc}
        <ul>
            {
                props.actions.map((item, key) =>
                <li key={key}>{item.text}</li>
                )
            }         
        </ul>
      </div>
    </div>
  )
}

export default experience;