import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classObjects = [];
  for (let idx = 0; idx < sizes.length; idx += 1) {
    classObjects.push(new ClassRoom(sizes[idx]));
  }
  return classObjects;
}
