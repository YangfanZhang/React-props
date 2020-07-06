import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      contact="+123456"
      email="beyonce.com"
    />
    <Card
      name="Mickey"
      img="https://lumiere-a.akamaihd.net/v1/images/r_mickeymousefranchise_mickeymouse_ddt-16970_f7867c2d.jpeg?region=0,0,1536,450"
      contact="100000"
      email="disney.com"
    />
  </div>,
  document.getElementById("root")
);
