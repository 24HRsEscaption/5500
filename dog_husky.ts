class DogHusky extends Dog{
    getAnimalSound(): string {
        return "woooooooooooooooooo"
    }

    getDogAction(action: String): string {
        if (action = "shakehand"){
            throw new Error("Husky cant do handshank,,plz choose a new action")
        } 
        return super.getDogAction(action);
    }
    
}