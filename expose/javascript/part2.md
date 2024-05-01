1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
Because i is a var, and therefore has a function level scope, we simply print out the value of i. This will always be equal to the length of the input array which is 3 in this case. The reason I know it will be equal to the length of the input array is because the for loop increases it so long as i < prices.length.
2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
The value of discountedPrice will be printed, which in this case is 150. This var is being updated to be a certain percentage off of a price for each element of our input array, so when we exit the for loop it will be the discount of the last element of the array. In this case the last element is 300, and we have 50 percent off, so 150 is the value stored by discountedPrice.
3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
The value of finalPrice is printed. This is calculated with every interation of the for loop by rounding the value of discountedPrice to the nearest penny. In this case, 150 will be the last value as described earlier, and it is rounded to 150. Therefore this line will print out 150.
4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
This function will return an array with each of the prices inputted except they are discounted by whatever the value of discount is. This is done within the for loop that iteratively calculates the rounded final price of each element in the input array. For this specific case, we get the output array: [50, 100, 150];
5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
We will get an error saying i is not defined. This is because using let will only give i the for loop block as its scope. When we reference it after the loop i will not be recognized.
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
We will get an error saying discountedPrice is not defined. This is because using let will only give discountedPrices the for loop block as it scope. When we reference it after the loop discoutnedPrices will not be recognized.
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
The value of finalPrice is printed. This is calculated with every interation of the for loop by rounding the value of discountedPrice to the nearest penny. In this case, 150 will be the last value as described earlier, and it is rounded to 150. Therefore this line will print out 150. The reason this works is because even though we used let, we did this in the same block as our print statement in line 14, so the scope is finalPrice allowes for it to be recognized.
8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
This function will return an array with each of the prices inputted except they are discounted by whatever the value of discount is. This is done within the for loop that iteratively calculates the rounded final price of each element in the input array. For this specific case, we get the output array: [50, 100, 150];
9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
We will get i is not defined error. This is because we used let for i, which means that its scope is limited to only the for loop block. When we refer to it, it will be undefined since it is after the for loop.
10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
We will print out the value of length, which is 3. This works because the const length is declared at the start of the body of the function and the scope is enough for the print statement to work.
11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
This function will return an array with each of the prices inputted except they are discounted by whatever the value of discount is. This is done within the for loop that iteratively calculates the rounded final price of each element in the input array. For this specific case, we get the output array: [50, 100, 150];

12. Given the above Object, write the notation for:
Accessing the value of the name property in the student object:
student.name

Accessing the value of the Grad Year property in the student object:
student['Grad Year']

Calling the function for the greeting property in the student object:
student.greeting()

Accessing the name property of the object in the Favorite Teacher property in student:
student['Favorite Teacher'].name

Access index zero in the array of the courseLoad property of the student object:
student.courseLoad[0]

13. Arithmetic
'3' + 2
'32'
This is because whenever there is a string the + operator work as concatination. The 2 is converted to a string for concatination. So our output is the resulting string '32'.
'3' - 2
1
Unlike +, the - symbol will always work as subtraction, this time the '3' is convered to the number 3 and we subract 2 to get 1.
3 + null
3
When adding null to a number, null is treated as zero/ignored, so the sum of 3+0 gives us 3.
'3' + null
'3null'
The + following a string is used as concationation, the null is convered to a string 'null' and then the two are concatinated to get '3null'.
true + 3

false + null
0
The false is convered to a zero when being used in addition, and same with the null. Therefore 0 + 0 gives us 0.
'3' + undefined
'3undefined'
The + following a string is used as concationation, the undefined is convered to a string 'undefined' and then the two are concatinated to get '3undefined'.
'3' - undefined
NaN
javaScript cannot subtract undefined value from a string, the result is not a number, which is shown as NaN.

14. Comparison
'2' > 1
true
The string '2' is first convered to a number 2, and then compared to 1. Because it is large, the boolean output is true.
'2' < '12'
false
When comparing two string, the values are compared lexographically, since the string 2 is greater than the string 1, the string '2' is lexographically greater than '12', and the statement is false.
2 == '2'
true.
the string '2' is convered into the number 2, and then checked for equality to 2. Which is true.

2 === '2'
false
using === compared both equality and type. The types are different therefore the output is false.
true == 2
false
The value true is convered into the number 1 when checking for equality between numbers. Since 1 and 2 are not equal, the output is false.
true === Boolean(2)
true
The Boolean(2) part is first evaluated, given the number 2, the function will output true because it is a non zero value. Now we are comparing true to true. These are both the same type and the same value so the output is true.
15. Explain the difference between the == and === operators.
the == operator simply compares value and will change type as needed. However, using the === operator will compare both the values and the type.

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
See answer in the js file in this folder.

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

The result will be that the loop goes through each elemnt in the input array, and then for each element in the array, the newArry will get the value of that element after it has been passed through the input function, callBack. This function gets the doSomething function, which simply doubles the value of whatever number is inputed. Therefore, since our input is ([1, 2, 3], doSomething) our output will be [2, 4, 6].

18. The answer is in the js file in this folder

19. 
1
4
3
2
