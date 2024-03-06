// import classes from "./Card.module.css";

function Card({ name, text, profilePic }) {
  // const cardStyle = {
  //   backgroundcolor: "blue",
  // };

  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="profile picture" />
      <h2 className="card-title">{name}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;
