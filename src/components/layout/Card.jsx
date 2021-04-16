
import "./Card.css";
import React from "react";



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
    <div className="Card">
     <div className="Title">{props.titulo}</div>
      <div className="Content">
        {props.children}
        </div>
    </div>
    );
};