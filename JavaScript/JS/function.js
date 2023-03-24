function home() //function decleared
{
    console.log("hello Nepal")
}

home()//function calling
console.log('sajan')
home()


//function with agrument and parameter
function wlc(a='ss', b=0) //parameter
{
    console.log("welcome to nepal" , a ,b)
}
wlc('bibek',23)//argument
wlc()


//function with return value
function sweet(z){
    return z+z
}

console.log(sweet(5))
console.log(sweet(15))

//function expression
var q=function(r)
{
    return r + r
}
console.log(q(3))

//arrow function
var qq=ac=>ac+ac
console.log(qq(3))
