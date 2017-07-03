'use strict';
let isPrime = (number,arr)=> {
	let index = 0;

	while (index < arr.length) {
		if (number % arr[index] === 0) {
			return false;
		}
		index++;
	}
 
	return true;
};
    
let app = {
	getPrime : number=>{
		let arr = [];
		if(typeof(number) ==='number'){

			for(let index=2;index<=number;index++){
				if(isPrime(index,arr)){
					arr = arr.concat(index);
				}
			}
		}
	
		return arr;
	}
};
 


module.exports = app;

console.log(app.getPrime(5));

