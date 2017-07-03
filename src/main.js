'use strict';
let isPrime = (number,arr)=> {
    /*
        This function check if a number is a prime number or not.
        This function accepts a the number to check and  an array of prime numbers as arg
        The inputed array is an array of all prime numbers before the inputed number.
     */
	let index = 0;
    // looping through the array of prime numbers lesser than number
	while (index < arr.length) {

        // divides the number by each element in the array and check if reminder is equal to 0
    
		if (number % arr[index] === 0) {
            // return false if mod of number === 0 
			return false;
		}
		index++;
	}
    
	return true;
};
    
let app = {
	getPrime : number=>{
		let arr = [];
        // check input type
		if(typeof(number) ==='number'){
			number = Math.round(number);
            // looping through numbers in the range of 2 to number(inputed number)
			for(let index=2;index<=number;index++){

                // checking if number is a prime number
				if(isPrime(index,arr)){
                    // adding number to the array of prime numbers
					arr = arr.concat(index);
				}
			}
		}
	
		return arr;
	}
};
 

module.exports = app;

console.log(app.getPrime(4.9));
