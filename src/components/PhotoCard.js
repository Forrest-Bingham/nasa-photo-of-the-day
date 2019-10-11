import React, { useState } from "react";
import { Button } from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

const PhotoCard = props => {
  //   const [newDate, setNewDate] = useState([]);
  // const [newDate, setNewDate] = useState([]);
  const [toggle, setToggle] = useState(false);

  function getNewData() {}
  return (
    <div className="Title" key={props.id}>
      <h2 className="photoTitle">{props.title}</h2>
      <div className="photoAndDate">
        <img className="Photo" alt="space" src={props.url} />
        <div className="submitSection">
          <h3 className="date">Date: </h3>
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
          <Button
            color={props.color}
            className="submit"
            onClick={e => props.getData(props.newDate, props.setPhoto)}
          >
            Submit
          </Button>
          <h3 className="buttonChange">Change the color of the button!</h3>
          <div className="moreButtons">
            <Button color="danger" onClick={() => props.setColor("danger")}>
              Red
            </Button>
            <Button color="primary" onClick={() => props.setColor("primary")}>
              Blue
            </Button>
            <Button color="success" onClick={() => props.setColor("success")}>
              Green
            </Button>
            <Button color="warning" onClick={() => props.setColor("warning")}>
              Yellow
            </Button>
          </div>

          <div>
            <Button id="Popover1" type="button">
              Copyright
            </Button>
            <Popover
              placement="bottom"
              isOpen={toggle}
              target="Popover1"
              toggle={setToggle}
            >
              {console.log({ toggle })}
              {console.log({ setToggle })}
              <PopoverHeader> Photographer </PopoverHeader>
              <PopoverBody> {props.copyright} </PopoverBody>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
