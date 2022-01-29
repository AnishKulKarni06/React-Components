import React from "react";
import Person from "./Person";
function NameList() {
  let names = [ "Ananya","Anish"];
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ];
 const personList = persons.map(person => <Person  person={person} key={person.id}   />);
  const nameslist = names.map((key, index) => <h1 > {key}💕</h1>);

 

  return( <div>{nameslist} {personList}</div>);
}

export default NameList;
