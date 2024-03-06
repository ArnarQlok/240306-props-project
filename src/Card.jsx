// import classes from "./Card.module.css";

import profilePic from "./assets/profile.jpg";

function Card() {
  // const cardStyle = {
  //   backgroundcolor: "blue",
  // };

  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Arnar</h2>
      <p className="card-text">Jag lär ut React och gillar o spela gura</p>
    </div>
  );
}

export default Card;
