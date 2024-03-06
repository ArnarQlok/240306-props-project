import { useState } from "react";

const Person = () => {
  const [name, setName] = useState("Pluto");
  const [age, setAge] = useState(35);
  const [isEmployeed, setIsEmployeed] = useState(true);

  function updateName(e) {
    // setName("Ior");
    setName(e.target.value);
  }

  function incrementAge() {
    setAge(age + 1);
  }

  function toggleStatus() {
    setIsEmployeed(!isEmployeed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      {/* <button onClick={updateName}>Klicka</button> */}
      <input type="text" onChange={(e) => updateName(e)} />

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>

      <p>Is employeed: {isEmployeed ? "Yes" : "No"}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
};

export default Person;
