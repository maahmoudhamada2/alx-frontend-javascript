import ClassRoom from "./0-classroom.js";

function myFunction() {
  const sizes = [19, 20, 34];
  let classObjects = [];
  for (let idx = 0; idx < sizes.length; idx++) {
    classObjects.push(new ClassRoom(sizes[idx]));
  }
  return classObjects;
}


console.log(myFunction())