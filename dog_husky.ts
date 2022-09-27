class DogHusky extends Dog {
  getAnimalSound(): string {
    return "woooooooooooooooooo";
  }

  getDogAction(action: String): string {
    if ((action = "shakehand")) {
      throw new Error("Husky cant do handshank,,plz choose a new action");
    }
    return super.getDogAction(action);
  }
  


// break rule 1:  break the rule of minimize repetition, it can just inheritate from dog class
  getAnimalInfo(): string {
    let old_dog_notice = " no notice would apply";
    if (this.age > 15) {
      old_dog_notice = " this is a old dog who need special care";
    }
    return (
      this.name +
      " is a" +
      this._species +
      "who is" +
      this.age.toString +
      "-year-old." +
      old_dog_notice
    );
  }
}