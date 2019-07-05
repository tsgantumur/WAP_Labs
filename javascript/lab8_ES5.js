/*Review 7
* Q2.a. x is only global variable
* Q2.b. Yes we have func1 closure
* Q3.c. Outer1 and 10
* Q4.d. We need to change let module to var module
* */
/*
* Q4. undefined 5 7 2 Cannot read property 'x' undefined
* */

(function() {
    "use strict";
        var createBicyclePrototype = function () {
        return {
            speed: 0,
            applyBrake: function (val) {
                this.speed -= val;
            },
            speedup: function (val) {
                this.speed += val;
            }
        }
    };

    var createMountainBikePrototype = function (prototype) {
        var obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function (gear) {
            this.gear = gear;
        }

        return obj;
    };

    var bicyclePrototype = new createBicyclePrototype;
    var mountainBikePrototype = new createMountainBikePrototype(bicyclePrototype);

    var bicycleObj = Object.create(bicyclePrototype);
    var mountainBikeObj = Object.create(mountainBikePrototype);
})();



