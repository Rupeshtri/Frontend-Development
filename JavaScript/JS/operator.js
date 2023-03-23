// Arthmetic Operator
// var a,b;
// a=2;
// b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// //console.log(a);
// console.log(a--);
// console.log(a);
// console.log(a**b);


 // Assignment Operator =, +=, -=, /=, %=
// var x, y;
// x=2;
// y=3;
// console.log(x+=y) // x=x+y; 2+3=5
// console.log(x-=y) // x =x-y; 5-3=2
// console.log(x*=y)// x=x*y; 2*3=6
// console.log(x/=y)// x=x/y; 6/3=2
// console.log(x%=y) // x=x%y; 2%2 remainder

// Comparision Operator ==, ===, >, <, >=, <=
// var aa, bb, cc;
// aa=2;
// bb='2';
// cc=4;
// console.log(aa==bb); //true
// console.log(aa===bb); //false strictly is not equal. Here aa is number and bb is string
// console.log(aa>cc); // false
// console.log(aa<cc);

//Logical operator ::  and(&&),  or(||),  not(!)
// var m=true;
// var n=false;
// console.log(m && n); //false
// console.log(m && m); //true
// console.log(m || n); //true
// console.log(n || n);//false
// console.log( !n);

//example 
// USING THE NOT(!) OPERATOR

// let canDrive = true;
// let hasLicense = false;

// if (!canDrive && !hasLicense) {
//      console.log("Sorry, you are not eligible to drive")
// }

//ternary operator
//console.log((2>3)? "This is true" : "This is false");

//example ask to teacher why tis is not working.

/* const age = prompt("Your name?");
console.log((age>=18) ? "you are aduld" : "you are not adult yet") */


//conditiional operator
/* if(2>1){
    console.log("this is statement")
}else if(2==='2'){
    console.log("this is not equal")
}else{
    console.log("This is correct")
} */

//example
//let age = prompt('what is your age?')
// let age = '6';
// if (age>=18){
//     console.log("your are adult")
// }else{
//     console.log("you are not aduld yet")
// }


//Switch case
var abc = 2;
switch(abc) {
    case 1 : console.log("today is monday");break;
    case 2: console.log("today is thursday");break;
    case 3: console.log("today is friday");break;
    default : console.log("Unknown Days");break;
}

