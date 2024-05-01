1. What is printed by line 9? If the code returns an error, explain why.
As long as the input add is a boolean true, and all other inputs are the expected data type, line 9 will print the text "values added: " followed by the value of reslt, which will is computed in line 7 by adding num1 and num2. Therefore the printed text will be "values added: 20".
2. What is printed by line 13? If the code returns an error, explain why. 
if our input add was a boolean true, line 13 will print the text "final result: " followed by the value of result, otherwise we will get an error. This is because if add is not boolean true we will never enter the if statement and therefore never declare the var result, trying to print the value of an undeclared variable gives an error in javascript. However, since we are inputting 10 10 and true, we will have the printed text: "final result: 20".
3. What is printed by line 9? If the code returns an error, explain why. 
line 9 will print out the text: "values added: 20".
4. What is printed by line 13? If the code returns an error, explain why. 
There will be an error, because the when trying to print the value of result, the scope of result will not be large enough to be accessed outside of the if statement since we used let. Therefore, we can expect to see something along the lines of 'result is not defined' in our error.
5. What is printed by line 9? If the code returns an error, explain why.
There is an error, because result is a const, and then in the next line when we try to reassign result's value we will get an error because constant's cannot have their value updates. So nothing is printed, we just get an error.
6. What is printed by line 13? If the code returns an error, explain why. 
There is an error, because result is a const, and then in the next line when we try to reassign result's value we will get an error because constant's cannot have their value updates. So nothing is printed, we just get an error.




