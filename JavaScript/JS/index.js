//console.log("hello");
// js variables storing data values
/* var name="Rupesh";
console.log(name);
console.log(typeof name);

var num= 23;
console.log(typeof num);

var abc=true;
console.log(typeof abc);
document.write('Hello World, How are you?') */



//arthmetic operator
var a,b;
a=2;
b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(a);
console.log(a**b);

//Assignment Operator
var x,y ;
x=2; y=3;
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x%=y);

//comparision operator ==,===,>, <,>=, <=
var aa, bb, cc;
aa=2; bb=2; cc=4;
console.log(aa==bb);
console.log(aa===bb);
console.log(aa<cc);
console.log(aa>cc);

//Logical operator
var m=true;
var n=false;
console.log(m && n); //false
console.log(m && m); //true
console.log(m || n); //true
console.log(n || n);//false
console.log( !n);


//Ternary operator
console.log((2<1) ? "It is True" : "It is false");

//conditiional operator
if(2<1)
{
console.log("Hello");
}
else if(2==='2'){
    console.log("same")
}
else{
    console.log("FFFF")
}

//Switch

var abc=2;
switch (abc)
{
    case 1: console.log("today is monday");
    case 2: console.log("today is tuesday");
    case 2: console.log("today is wed");
   

}

//Loop
//for ,while, dowhile, forin, for of, continue, break 
console.log("for loop start")
for(var a=0; a<10; a++){
   if(a==3){
    console.log("its 3")
    //continue; brreak
    break;  
    }
}
console.log("for loop end");


var b=0;
while(b<10)
{
    console.log("while loop", b)
    b++
}






