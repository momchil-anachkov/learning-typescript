class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Reptile extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        super.move(distanceInMeters);
        console.log("Sliding...");
    }
}

class Snake extends Reptile {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        super.move(distanceInMeters);
        console.log("Slithering...");
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    doSomething() {
      this.move();
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
let tom2: Horse = new Horse("Tommy the Palomino 2");

sam.move();
// tom.move(34);
// tom2.move(350);