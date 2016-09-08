/**
 * Created by Lee_G on 2016-09-08.
 */
//link to the node file stystem library to read the text files
var fs = require('fs');

//open $ read food list
var food = fs.readFileSync('food.txt', 'utf8');

//print food heading
console.log('FOOD');

//print food list
console.log(food);

//open $ read food list
var drinks = fs.readFileSync('drinks.txt', 'utf8');

//print drink heading
console.log('\nDRINKS');

//print drink list
console.log(drinks);