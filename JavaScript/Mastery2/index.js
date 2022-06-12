// factory function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// Constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);


function Circle(radius) {
    // instance Members
    this.radius = raidus;
}

//Prototype Members

Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function () {
    return 'Circle with radius' + this.radius;
}