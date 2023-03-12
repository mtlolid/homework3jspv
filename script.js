function CoffeeMake(){};

CoffeeMake.prototype.on = function(){
    console.log('Coffee is making!');
};

CoffeeMake.prototype.off = function(){
    console.log('Coffee is not making!');
};

// Капельна кавоварка

function DripCoffeMaker(){
    CoffeeMake.call(this);
};

DripCoffeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeMaker.prototype.refillWater = function(){
    console.log('Water is refilled!')
}

// Ріжкова кавоварка

function ExpressoCoffeMaker(){};

ExpressoCoffeMaker.prototype = Object.create(CoffeeMake.prototype);
ExpressoCoffeMaker.prototype.makeExpresso = function(){
    console.log('The expresso is done!')
}

// Каво-машина

function AutoCoffeMaker(){};

AutoCoffeMaker.prototype = Object.create(CoffeeMake.prototype);
AutoCoffeMaker.prototype.grindCoffee = function(){
    console.log('The coffee is grinded!')
}

let coffe = new AutoCoffeMaker();
coffe.off.call();




