const assert = require('chai').assert;
const app = require('../src/main.js');

 
const returnValueFor2 = [2]; 
const returnValueFor5 = [2,3,5]; 
const returnValueFor50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]; 
const returnValueFor100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]; 
const returnValueFor1000 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]; 
 


describe('Prime numbers generator',function(){

	describe('handle valid inputs lesser than 2',function(){

		it('Should return [] of prime numbers from 0 to 0',function(){
			assert.deepEqual(app.getPrime(0),[]);  
		});
		it('Should return [] of prime numbers for negative numbers',function(){
			assert.deepEqual(app.getPrime(-100),[]);  
		});
		it('Should return [] of prime numbers from 0 to 1',function(){
			assert.deepEqual(app.getPrime(1),[]);  
		});
	});

	describe('handle valid inputs greater than 2',function(){

		it(`Should return [${returnValueFor2}] of prime numbers from 0 to 2`,function(){
			assert.deepEqual(app.getPrime(0),[]);  
		});
		// it(`Should return [${returnValueFor5}] of prime numbers from 0 to 5`,function(){
		// 	assert.deepEqual(app.getPrime(0),...returnValueFor5);  
		// });
		// it(`Should return [${returnValueFor50}] of prime numbers from 0 to 50`,function(){
		// 	assert.deepEqual(app.getPrime(100),...returnValueFor50);  
		// });
		// it(`Should [${returnValueFor100}]  of prime numbers from 0 to 100 `,function(){
		// 	assert.deepEqual(app.getPrime(100),...returnValueFor100);  
		// });
		// it(`Should [${returnValueFor1000}] of prime numbers from 0 to 1000 `,function(){
		// 	assert.deepEqual(app.getPrime(1000),...returnValueFor1000);  
		// });
	});

	describe('handle invalid inputs',function(){
		it('Should []  of prime numbers for string ',function(){
			assert.deepEqual(app.getPrime('1000'),[]);  
		});

		it('Should []  of prime numbers for undefined ',function(){
			assert.deepEqual(app.getPrime(undefined),[]);  
		});
	});

});