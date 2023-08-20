export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) {
      throw new Error('Personage is in the team');
    }
    this.members.add(personage);
  }

  addAll(...personages) {
    personages.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }
}
