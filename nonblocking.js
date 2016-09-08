/**
 * Created by Lee_G on 2016-09-08.
 */
//link to the node file stystem library to read the text files
var fs = require('fs');

//load food asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
    //display food list when done
    if (err)
    {
        console.log(err);
    }
    else
    {
    console.log('FOOD');

    console.log(food);
    }
});


//load drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks)
{
    //display drinks list when done
    if (err)
    {
        console.log(err);
    }
    else
    {
        //print drink heading
        console.log('\nDRINKS');

        console.log(drinks);
    }
});
