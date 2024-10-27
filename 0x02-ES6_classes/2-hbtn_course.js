export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of strings');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = newValue;
    }
  }

  get length() {
    return this._length;
  }

  set length(newValue) {
    if (typeof newValue !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = newValue;
    }
  }

  get students() {
    return this._students;
  }

  set students(newValue) {
    if (!Array.isArray(newValue)) {
      throw TypeError('Students must be an array of strings');
    } else {
      this._students = newValue;
    }
  }
}
