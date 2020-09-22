class Task {
  constructor(title, id) {
    this.title = title;

    this.id = id;
  }
  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      this.latestId++;
    }
    console.log(this.latestId);
    return this.latestId;
  }
  static decrementId() {
    if (this.latestId) {
      this.latestId--;
    } else {
      return this.latestId;
    }
  }
}
module.exports = Task;
