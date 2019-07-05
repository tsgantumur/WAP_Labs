
class createBicyclePrototype {

    constructor(speed)
    {
        this.speed = speed;
    }

    applyBrake(val)
    {
        this.speed -= val;
    }

    speedup(val)
    {
        this.speed += val;
    }


}

class createMountainBikePrototype extends createBicyclePrototype {
    constructor(gear) {
        super();
        this.gear = gear;

    }

    setGear(val)
    {
        this.gear = val;
    }

}

var bicyclePrototype = new createBicyclePrototype(0);
var mountainBikePrototype = new createMountainBikePrototype(1);

var bicycleObj = Object.create(bicyclePrototype);
var mountainBikeObj = Object.create(mountainBikePrototype);
bicyclePrototype.speedup(5);
bicycleObj.speed;
mountainBikeObj.setGear(2);
mountainBikeObj.gear;