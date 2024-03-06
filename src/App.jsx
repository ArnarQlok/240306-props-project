import "./App.css";
import Card from "./Card";
import Student from "./Student";
import Message from "./Message";
import Garage from "./Garage";
import Person from "./Person";

import profilePic from "./assets/profile.jpg";

function App() {
  return (
    <>
      <Person />
      {/* <Garage /> */}

      {/* <Card name="Arniz" text="Jag lär ut React" profilePic={profilePic} />
      <Card name="Aldor" text="Jag lär ut React" profilePic={profilePic} />
      <Student name="Kajsa Anka" age={30} isStudent={true} />
      <Student name="Musse Pigg" age={55} isStudent={false} />
      <Student /> */}

      {/* <Message name="Arne" isLoggedIn={true} /> */}
    </>
  );
}

export default App;
