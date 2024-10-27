import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newValue) {
    this._sqft = newValue;
  }

  get floors() {
    return this._floors;
  }

  set floors(newValue) {
    this._floors = newValue;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
