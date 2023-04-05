

// 1. Write a js program to find maximum between two numbers.

function max(num1, num2){
    if(num1>num2){
      console.log('num1 is greater');
    }
    else{
        console.log('num2 is greater');
    }
}
max(2,3)



// 2. Write a js program to find maximum between three numbers.

function max(num1, num2, num3){
    if(num1>num2 && num1>num3){
        console.log('num1 is greater');
    }
    else if(num2>num1 && num2>num3){
        console.log('num2 is greater');
    }
    else{
        console.log('num3 is greater')
    }
}
max(7,8,9)



// 3. Write a js program to check whether a number is negative, positive or zero.

var a=prompt('Enter a number');
if(a>0){
    console.log('You entered positive number');
}
if(a==0){
  console.log('You entered zero');
}
if(a<0){
  console.log('You entered negative number');
}



// 4.Write a js program to check whether a number is divisible by 5 and 11 or not.

function divisible(){
    num=prompt('Enter a number')
    if(num % 5==0 && num % 11==0){
        console.log('It is divisible on 5 and 11')
    }
    else{
        console.log('This is not divisible on 5 and 11' )
    }
}
divisible()


// 5. Write a js program to check whether a number is even or odd.

a=3
if(a%2==0){
    console.log('a is even number')
}
else{
    console.log('a is odd number')
}



// 6. Write a js program to check whether a year is leap year or not.

function year(){
    year=prompt('Enter year');
    if(year % 4==0){
    console.log('This is leap year');
    }
    else{
        console.log('This is not leap year');
    }
} 
year()



// 7.Write a js program to check whether a character is alphabet or not.

function character(){
    value=prompt('Enter a value');
    if((value > 'a' && value < 'z')||(value > 'A' && value < 'Z')){
        console.log('This is alphabet character');
    }
    else{
        console.log('This is not alphabet chracter');
    }
}
character()



// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

function Uplow(){
    value=prompt('Enter a value');
    if((value >= 'a' && value <= 'z')){
        console.log('This is lower case later');
    }
    if(value >= 'A' && value <= 'Z'){
        console.log('This is upper case later');
    }
}    
Uplow() 



// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

function marks(){
    var percentage=prompt("Enter percentage");
    if(percentage>=90){
        console.log('Grade A')
    }
    if(percentage>=80 && percentage<90 ){
        console.log('Grade B')
    }
    if(percentage>=70 && percentage<80){
        console.log('Grade C')
    }
    if(percentage>=60 && percentage<70){
        console.log('Grade D')
    }
    if(percentage>=40 && percentage<60){
        console.log('Grade E')
    }
    if(percentage<40){
        console.log('Grade F')
    }
}   
marks()   
    


//  21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

var units=prompt('Enter Units')
if(units<=50){
    bill=units*0.50
    console.log('Your bill is= ',bill)
}
if(units>50 && units<=150){
    bill=units*0.70
    console.log('Your bill is= ',bill)
}
if(units>150 && units<=250){
    bill=units*1.20
    console.log('Your bill is= ',bill)
}
if(units>250){
    bill=units*1.50
    console.log('Your bill is= ',bill)
}


