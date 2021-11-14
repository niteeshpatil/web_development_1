// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//     return `rgb(${r},${g},${b})`;
// }



// function makecolor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     };
//     return color;
// }

// const firstColor = makecolor(35, 255, 150);


// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
// }


// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }

// const color1 = new Color(34, 43, 122);

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }

//     innerrgb() {
//         const { r, g, b } = this;
//         return `${r},${g},${b}`;
//     }
//     rgb() {
//         return `rgb(${this.innerrgb()})`;
//     }

//     hex() {
//         const { r, g, b } = this;
//         return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     }


//     rgba(a = 1.0) {
//         return `rgba(${this.innerrgb()},${a})`;
//     }

// }

// const c1 = new Color(255, 67, 89, `tomato`);

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}


class Cat extends Pet {

    constructor(name, age, lifeleft = 9) {
        super(name, age)
        this.lifeleft = lifeleft;
    }
    meow() {
        return "Meow.Meow.."
    }
}

class Dog extends Pet {

    bark() {
        return "bowbow.."
    }
}