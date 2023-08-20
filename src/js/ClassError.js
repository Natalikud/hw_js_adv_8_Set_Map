export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Personage is in the team'],
      [3, 'Something else....'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
