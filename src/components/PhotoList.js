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

export default function PhotoList() {
  const [photo, setPhoto] = useState([]);

  const [newDate, setNewDate] = useState();

  useEffect(() => {
    getData(null, setPhoto);
  }, []);

  return (
    <div className="spacePhoto">
      {/* <button onChange={() => setNewDate(value)}>Submit</button>
       */}
      {/* {console.log(photo.target.value)}; */}
      <PhotoCard
        key={photo.id}
        title={photo.title}
        url={photo.url}
        date={photo.date}
        getData={getData}
        newDate={newDate}
        setNewDate={setNewDate}
        setPhoto={setPhoto}
      />
    </div>
  );
}
