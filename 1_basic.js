// How do you initialize Object in Javascript ?
/* Property or Method
 Object.property 
example : navigator.appName

 Object.method()
  example: log.console()

*/

// String is a primitive type
const s1 = 'Hello';
console.log(s1.toUpperCase());

// but we can initialize as Object too
const s2 = new String('Hello') ;

// See the difference!
console.log('Type of s1: ',typeof(s1));
console.log('Type of s2: ',typeof (s2));

// Object built in (window)
console.log(window);

//because Window is the HIGHEST Elemet, we are not obligated to initiate 'window'
console.log(window.alert('This is same by window'));
console.log(alert('This is same by window'));

console.log(`You are using: \n App name:`,navigator.appName +`\n App version: `+ navigator.appVersion +'\n Platform:'+ navigator.platform)

//Now, we are learning object literal :

const car1 = {
    brand : 'Fortuner',
    factory : 'Toyota',
    year    : 2010 ,
    getSummary_wrong : function(){
        return `${brand} is manufactured by ${factory}` ;
    },
    getSummary : function(){
        return `${this.brand} is manufactured by ${this.factory}` ;
    }
}

console.log(car1);
console.log(`Car's brand: ${car1.brand}` );

// See the effect of 'this.'
//console.log(`Wrong (make Error) : ${car1.getSummary_wrong()}` );
console.log(`RIGHT: ${car1.getSummary()}` );

// Get result in values based  (0,1,2,..)
console.log(`Result in values based : 0,1,2,...:`,Object.values(car1));


const car2 = {
    brand : 'FSanta Fe',
    factory : 'Hyundai',
    year    : 2015 ,
    getSummary : function(){
        return `${this.brand} is manufactured by ${this.factory}` ;
    }
}

// Get result in  Keys (0,1,2,..)
console.log(`Result in keys: 0,1,2,...:`,Object.keys(car2));

