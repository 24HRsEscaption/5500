class DogAuggie extends Dog {
  getAnimalSound(): string {
    return "woooooooooooooooooo";
  }
  getDogAction(action: String): string {
    if ((action = "eat strangers' food")) {
      throw new Error(
        "Auggie will noteat strangers' food ,plz choose a new action"
      );
    }
    return super.getDogAction(action);
  }
}