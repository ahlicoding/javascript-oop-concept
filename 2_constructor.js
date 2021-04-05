// Suppose we need to intiliaze 3 Object car :
var car1 = {
    brand : 'Fortuner',
    factory : 'Toyota',
    year    : 2010 ,
    getSummary : function(){
        return `${this.brand} is manufactured by ${this.factory}` ;
    }
}

var car2 = {
    brand : 'Santa Fe',
    factory : 'Hyundai',
    year    : 2015 ,
    getSummary : function(){
        return `${this.brand} is manufactured by ${this.factory}` ;
    }
}

var car3 = {
    brand : 'Pajero',
    factory : 'Mitsubishi',
    year    : 2017 ,
    getSummary : function(){
        return `${this.brand} is manufactured by ${this.factory}` ;
    }
}

// 25 lines to initiate 3 Object ?? SHIT !! That's NOT efficient!!!
// Let's find another way: function Constructor

function Car (brand,factory,year){
    this.brand      = brand;
    this.factory    = factory;
    this.year       = year;
    this.getSummary = () =>  `${this.brand} is manufactured by ${this.factory}`  ;
    
}

var car1 = new Car('Fortuner','Toyota',2010);
var car2 = new Car('Santa Fe','Hyundai',2015);
var car3 = new Car('Pajero','Mitsubishi',2017);

//11 lines .. That's better :-)

console.log(car1);
console.log(`Car1 brand: `,car1.brand);
console.log(`Car1 summary: `,car1.getSummary());

const fordbuild = {
    first : 2010,
    second : 2015,
}

// We even can insert an Object as parameter
var car4 = new Car('Escape','Ford',fordbuild)
//from proto Object

console.log(car4);
console.log(`Ford build:`,Object.getOwnPropertyNames( car4.year));

function secret() { return   `Sorry, it's classified!!`; }

// Or even method
var car5 = new Car('Viper','Tesla',secret())
console.log(`Tesla year: `,car5.year);

// NOW, WE MANIPULATING the object 
Car.prototype.getAge = function() {
    const ages = new Date().getFullYear() - this.year;
    return `${this.brand} is ${ages} years old !`;
};

console.log('How old is Pajero :',car3.getAge());

// CHANGE THE YEAR
Car.prototype.changeYear = function(newYear) {
   this.year = newYear ;
   this.change_year = true ;
};

console.log('Before change year :',car1.getAge() );
car1.changeYear(2020);
console.log('After change year :',car1.getAge());