class Greeter {
  getHour() {
    return new Date().getHours();
  }

  greet(name) {
    const hour = this.getHour();

    if (hour < 12) {
      return `Good morning, ${name}!`;
    } else {
      return `Good afternoon, ${name}!`;
    }
  }
}

export default Greeter;