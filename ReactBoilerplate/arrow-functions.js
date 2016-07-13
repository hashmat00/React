var names = ['hashmat', 'omid', 'yusuf', 'lutfullah'];

names.forEach(function(name){
    console.log('forEach', name);
});

console.log('===================')
names.forEach((name) => {
    console.log('Arrowfunc', name);
});

console.log('===================')
names.forEach((name) => console.log(name));

console.log('===================')
var returnMe = (name) => name + '!';
console.log(returnMe('hashmat'));



console.log('===================')
var person = {
    name: "hashmat",
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
}


person.greet();


console.log('===================')


// challenge Area
function add (a, b) {
    return a + b;
}

// adddStatement
var addStatement = (a, b) => {
    return a + b;
}
console.log(addStatement(4, 7));

console.log('===================')


// AddExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(7, 7));