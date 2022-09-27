class DogAuggie extends Dog {
  getAnimalSound(): string {
    return "woooooooooooooooooo";
  }
  getDogAction(action: String): string {
    if ((action = "eat strangers' food")) {
      throw new Error(
        "Auggie will not eat strangers' food ,plz choose a new action"
      );
    }
    // break rule no 4: don't hardcode things that are likely to change!
    return "auggie can shakehands";
  }


}