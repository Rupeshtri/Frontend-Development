var car =["Mercidies", "BMW", "VOLVO"];
console.log(car);
console.log(car.length);
console.log(car.pop());
console.log(car);
car.push("BIKe");
console.log(car)

console.log(car.shift());
car.unshift('Hyundai', 'Toyata');
console.log(car);

var fruit=['apple', 'banana', 'grapes','orange']
console.log(fruit.sort()); // alphabetically
console.log(fruit.reverse()); //reversr alphabetically
console.log(car.concat(fruit));
console.log(car.join('/'));
console.log(car.join('-'));


// Map, Find, Filter
var age= [26, 40, 20, 17, 65,5,33];
var findage = age.find(abcd)
function abcd(a){
    return a>15
}
console.log(findage);
var filterage= age.filter(bcd)
function bcd(a){
    return a>15;
}
console.log(filterage);

var mapage = age.map(ccc)
function ccc(b){
    return b+5
}
console.log(mapage);

var agefind= age.find(a=> a>15) 
console.log(agefind);

var agefilter = age.filter(a=> a>15)
console.log(agefilter);
var mapage = age.map(a=> a+10)
console.log(mapage)

//slice 
console.log(age.slice(1,4));
//reduce
console.log(age.reduce((total,a) => total+a) )


var details = ['sajan', '98044', 'ktm', '40'];
var dd={name:"sajan",address:'ktm', phone:'98044', age:34}
var stdata=[{name:"sajan",address:'ktm', phone:'98044', age:34},
            {name:"sagar",address:'ktm', phone:'98044', age:34},
            {name:"rajan",address:'ktm', phone:'98044', age:34}
            ]

console.log(stdata[1].name, stdata[2].name, stdata[0].name);