import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function getData(date, setData) {
  const url = date
    ? `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
  axios
    .get(url)
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    //   https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14
    //   https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${photo.date}
    .then(response => {
      console.log(response);
      console.log(response.data.date);
      console.log(response.data.title);
      console.log(response.data.url);
      setData(response.data);
    })
    .catch(error => {
      console.log("There are no more space pics Morty!", error);
    });
}

// const TopBar = styled.div`
//   transition: transform 0.2s ease-in;
//   background: #99f3eb;
//   color: black;
//   width: 200px;
//   max-height: 350px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 20px;
//   cursor: pointer;
//   box-shadow: 0px 1px 6px -2px grey;

//   &:hover {
//     transform: translateY(-5px) scale(1.05);
//   }
// `;

export default function PhotoList() {
  const [photo, setPhoto] = useState([]);

  const [newDate, setNewDate] = useState();
  const [color, setColor] = useState("secondary");

  useEffect(() => {
    getData(null, setPhoto);
  }, []);

  return (
    <div className="spacePhoto">
      <PhotoCard
        key={photo.id}
        title={photo.title}
        url={photo.url}
        date={photo.date}
        copyright={photo.copyright}
        explanation={photo.explanation}
        getData={getData}
        newDate={newDate}
        setNewDate={setNewDate}
        setPhoto={setPhoto}
        color={color}
        setColor={setColor}
      />
      }
    </div>
  );
}
