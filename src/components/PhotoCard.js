import React, { useState } from "react";

const PhotoCard = props => {
  //   const [newDate, setNewDate] = useState([]);
  // const [newDate, setNewDate] = useState([]);

  function getNewData() {}
  return (
    <div className="Title" key={props.id}>
      <h2 className="photoTitle">{props.title}</h2>
      <div className="photoAndDate">
        <img className="Photo" alt="space" src={props.url} />
        <h3 className="date">
          Date:{" "}
          <input
            value={props.newDate}
            type="date"
            name="selectDate"
            min="01-01-2000"
            max={props.maxDate}
            onChange={e => {
              //console.log(e.target.value);
              props.setNewDate(e.target.value);
            }}

            // value={props.target.value}
          ></input>
          <button
            className="submit"
            onClick={e => props.getData(props.newDate, props.setPhoto)}
          >
            Submit
          </button>
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;
