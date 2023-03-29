var car=['sajan','rupesh','shyam']
console.log(car)
console.log(car.length)
console.log(car.pop())
console.log(car)
car.push('bike', 'sagar')
console.log(car)
console.log(car.shift())
car.unshift('sajan', 'sagar')
console.log(car)



//Map , filter, find
var age = [1,100,5, 25, 60, 2]
var findage=age.find(abcd)
function abcd(a)
{
    return a>15
}console.log(findage)

//filter
var age = [1,100,5, 25, 60, 2]
var filterage=age.filter(abcd)
function abcd(a)
{
    return a>15
}console.log(filterage)

//map
var age = [1,100,5, 25, 60, 2]
var mapage=age.map(abcd)
function abcd(a)
{
    return a+5
}console.log(mapage)


//map , filter , find with arrow function

var afind = age.find(a=>a>15)
console.log(afind)

var afilter= age.filter(a=>a>15)
console.log(afilter)

var amap= age.map(a=>a+5)
console.log(amap)


//slice
var num = [11,20,40, 122, 55]
console.log(num.slice(2,3))

console.log(num.reduce((total, a)=>total+a),0)


//JSON DATA
var std =[
    { name:"sajan", ph:"09854", address:"lokanthali", age:30},
    { name:"sagar", ph:"09854", address:"lokanthali", age:30},
    { name:"rajan", ph:"09854", address:"lokanthali", age:30}

]
// for of 
 /* for(var d of std){
    console.log(d)
} */
//for in
/* for (var c in std){
    console.log(c)
} */ 
console.log(std[1].name, std[1].address)
