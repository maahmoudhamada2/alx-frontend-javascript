/* eslint-disable */
export default class Building {
  constructor(sqft) {
    if (
      typeof this.evacuationWarningMessage !== "function" &&
      this.__proto__ !== Building.prototype
    ) {
      throw Error(
        "Class extending Building must override evacuationWarningMessage");
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newValue) {
    this._sqft = newValue;
  }
}
